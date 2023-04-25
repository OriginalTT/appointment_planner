import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleNameChange = e => {
    setName(e.target.value);
  }

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  }

  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} /><br />
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} pattern="^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$" /><br />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} /><br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

