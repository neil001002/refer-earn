const express = require("express");
const { PrismaClient } = require("@prisma/client");
const nodemailer = require("nodemailer");
const router = express.Router();
const prisma = new PrismaClient();

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Validate referral data
const validateReferral = (data) => {
  const { referrerName, referrerEmail, referrerPhone, refereeName, refereeEmail, refereePhone, course } = data;
  if (!referrerName || !referrerEmail || !referrerPhone || !refereeName || !refereeEmail || !refereePhone || !course) {
    return false;
  }
  return true;
};

// Create a new referral
router.post("/", async (req, res) => {
  const { referrerName, referrerEmail, referrerPhone, refereeName, refereeEmail, refereePhone, course } = req.body;

  if (!validateReferral(req.body)) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newReferral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        referrerPhone,
        refereeName,
        refereeEmail,
        refereePhone,
        course,
      },
    });

    // Send referral email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: refereeEmail,
      subject: "You have been referred!",
      text: `Hi ${refereeName},\n\n${referrerName} has referred you to our course: ${course}. Please contact us for more details.\n\nThank you!`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(201).json(newReferral);
  } catch (error) {
    console.error("Error creating referral:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
