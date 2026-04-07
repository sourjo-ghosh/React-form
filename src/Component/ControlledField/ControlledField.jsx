import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [Email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    if (password.length < 5) {
      setPasswordError("password must be 5 character long");
    } else {
      setPasswordError("");
    }
  };
  const handleOnChangePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 5) {
      setPasswordError("Password must be 5 characters");
    } else {
      setPasswordError("");
    }
  };
  const handleOnChangeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
    if (Email.length < 5) {
      setEmailError("Email must be 5 characters");
    } else {
      setEmailError("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={handleOnChangeEmail}
          defaultValue={Email}
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          onChange={handleOnChangePassword}
          defaultValue={password}
          placeholder="Password"
          required
        />
        <br />
        <input type="submit" value="submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{passwordError}</small>
      </p>
      <p style={{ color: "red" }}>
        <small>{emailError}</small>
      </p>
    </div>
  );
};

export default ControlledField;
