"use client";
import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Button } from "@/components/button";

interface OtpModalProps {
  phone: string;
  onClose: () => void;
  onVerify: (otp: string) => void;
}

const OtpModal = ({ phone, onClose, onVerify }: OtpModalProps) => {
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    if (otp.length !== 4) {
      alert("Please enter a 4-digit OTP");
      return;
    }
    onVerify(otp);
  };

  return (
    <Modal open={true} onClose={onClose} center>
      <div className="flex flex-col gap-4 w-72">
        <h2 className="text-lg font-bold text-center">Enter OTP</h2>
        <p className="text-sm text-center">OTP sent to {phone}</p>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/, ""))} // only digits
          maxLength={4}
          placeholder="Enter 4-digit OTP"
          className="border rounded p-2 text-center text-lg"
        />
        <Button onClick={handleSubmit}>Verify OTP</Button>
        <Button variant="outline" onClick={onClose}>Cancel</Button>
      </div>
    </Modal>
  );
};

export default OtpModal;
