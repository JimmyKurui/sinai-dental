import { useState } from "react";

const Analytics = () => {
  const [verified, setVerified] = useState(false);
  const [code, setCode] = useState(["", "", "", "", ""]);
  const correctOtp = "80808"; 

  function handleInputChange(e, index) {
    const value = e.target.value;
    if (isNaN(value) || value.length > 1) {
      return;
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to the next input field if the current one is filled
    if (value && index < code.length - 1) {
      document.getElementById(`${index + 2}`).focus();
    }
  }

  function validateOtp() {
    if (code.join("") === correctOtp) {
      setVerified(true);
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  }

  return verified ? (
    <div className="container-fluid container-md pt-5">
      <div className="row pt-5">
        <h2 className="text-center mt-5">Analytics</h2>
        {/* Graph, Summary Table */}
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center">
      <div className="row pt-5 w-25">
        <h2 className="text-center mt-5">Enter OTP sent to your mail</h2>
        <div className="otp mb-3 d-flex justify-content-center">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              id={`${index + 1}`}
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(e, index)}
              className="otp-input"
            />
          ))}
        </div>
        <button className="btn bg-app-primary" onClick={validateOtp}>
          Validate
        </button>
      </div>
    </div>
  );
};

export default Analytics;
