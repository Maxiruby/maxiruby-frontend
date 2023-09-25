import { useState } from "react";
import axios from "axios";
export default function SendVerification({ user }: any) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const sendVerificationLink = async () => {
    try {
      const { data } = await axios.post(
        `https://api.maxiruby.com/api/users/auth/sendeverify`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setSuccess(data.message);
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="send_verification" style={{ textAlign: "center" }}>
      <span
        style={{
          color: "#EBDE14",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        Your account is not verified,verify your account before it gets deleted
        after a month from creating.
      </span>
      <a
       
        onClick={() => {
          sendVerificationLink();
        }}
      >
        click here to resend verification link
      </a>
      {success && <div className="success_text">{success}</div>}
      {error && <div className="error_text">{error}</div>}
    </div>
  );
}
