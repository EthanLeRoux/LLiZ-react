import { useState } from "react";


export default function ForgotPassword() {
    const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/forgotpswd/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    alert(data.message)
    setMessage(data.message);
  } catch (err) {
    setMessage(err.message);
  }
};


  return (
    <div>
      <h2>Forgot Password</h2>
      <h5>Enter your email to receive a password reset link</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    );
}