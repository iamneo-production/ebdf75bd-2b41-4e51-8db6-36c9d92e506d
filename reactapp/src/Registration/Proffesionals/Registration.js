import React, { useState } from 'react';
import "./Registration.css";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [profession, setProfession] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setMobile('');
    setProfession('');
    setExperience('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="[0-9]{10}" // 10-digit phone number pattern
          required
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Mobile:
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          pattern="[0-9]{10}" // 10-digit mobile number pattern
          required
        />
      </label>
      <br />
      <label>
        Profession:
        <input
          type="text"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Experience:
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
