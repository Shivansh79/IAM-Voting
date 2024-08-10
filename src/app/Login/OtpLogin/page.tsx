// components/OtpVerification.js
"use client"
import React, { useState } from 'react';
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from '../../../../firebaseconfig';

const OtpVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow user to proceed with OTP verification
          sendOtp();
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
        }
      });
    }
  };

  const sendOtp = () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
        alert('OTP sent successfully!');
      })
      .catch((error) => {
        console.error("Error during signInWithPhoneNumber:", error);
        alert('Error sending OTP. Please try again.');
      });
  };

  const verifyOtp = () => {
    if (confirmationResult) {
      confirmationResult.confirm(otp)
        .then((result) => {
          alert('OTP verified successfully!');
          // User signed in successfully.
          const user = result.user;
          console.log('User:', user);
        })
        .catch((error) => {
          console.error("Error verifying OTP:", error);
          alert('Invalid OTP. Please try again.');
        });
    }
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <div id="recaptcha-container"></div>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <button onClick={sendOtp}>Send OTP</button>
      <br />
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={verifyOtp}>Verify OTP</button>
    </div>
  );
};

export default OtpVerification;
