import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import ReferralModal from "./components/ReferralModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReferNow = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HeroSection onReferNow={handleReferNow} />
      <ReferralModal open={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
