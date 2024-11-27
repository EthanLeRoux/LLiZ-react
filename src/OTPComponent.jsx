import React, { useState } from 'react';
import * as OTPAuth from 'otpauth';

const OTPComponent = () => {
    const [otp, setOtp] = useState('');
    const [generatedToken, setGeneratedToken] = useState('');
    const [secret, setSecret] = useState('');

    // Create a new TOTP object
    const totp = new OTPAuth.TOTP({
        issuer: 'Your Service',
        label: 'user@example.com',
        algorithm: 'SHA1',
        digits: 6,
        period: 30,
        secret: 'US3WHSG7X5KAPV27VANWKQHF3SH3HULL', // Use a securely generated secret
    });

    const generateOtp = () => {
        const token = totp.generate();
        setGeneratedToken(token);
        const secret = totp.secret.base32;
        setSecret(secret); // Save or display this secret securely
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const validateOtp = () => {
        const delta = totp.validate({ token: otp, window: 1 });
        if (delta) {
            alert('OTP is valid!');
        } else {
            alert('OTP is invalid!');
        }
    };

    return (
        <div>
            <h3>Generate OTP</h3>
            <button onClick={generateOtp}>Generate OTP</button>
            <p>Generated OTP: {generatedToken}</p>

            <h3>Enter OTP</h3>
            <input
                type="text"
                value={otp}
                onChange={handleOtpChange}
                placeholder="Enter OTP"
            />
            <button onClick={validateOtp}>Validate OTP</button>
        </div>
    );
};

export default OTPComponent;
