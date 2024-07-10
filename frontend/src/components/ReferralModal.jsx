import React from "react";

const ReferralModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">Referral Form</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Referrer Name</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Referrer Email</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Referrer Phone</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="tel" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Referee Name</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Referee Email</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Referee Phone</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="tel" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Course Interested In</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" required />
          </div>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600" type="submit">
            Submit
          </button>
        </form>
        <button className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ReferralModal;
