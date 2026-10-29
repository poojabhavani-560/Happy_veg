import React, { useState } from "react";
import { Link } from "react-router-dom";

function AccountCreation() {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    phone: "",
    country: "",
    address: "",
    email: "",
    password: "",
  });

  const [accountCreated, setAccountCreated] = useState(false);

  function update(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function submit(event) {
    event.preventDefault();

    if (!/^[0-9]{10}$/.test(form.phone)) {
      alert("Enter a valid 10-digit phone number.");
      return;
    }

    setAccountCreated(true);
  }

  if (accountCreated) {
    return (
      <section className="form-page account-page">
        <div className="site-form account-transparent-form account-success">
          <h1>Account Created Successfully!</h1>

          <p>Your HappyVeg account has been created.</p>

          <p>
            You can now log in to your account.
          </p>

          <Link to="/login" className="green-button login-here-link">
            Login Here
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="form-page account-page">
      <form
        className="site-form account-transparent-form"
        onSubmit={submit}
      >
        <h1>Create Account</h1>

        <div className="account-fields">
          <div className="account-row">
            <label htmlFor="account-name">Full Name:</label>
            <input
              id="account-name"
              type="text"
              name="name"
              value={form.name}
              onChange={update}
              placeholder="Enter Full Name"
              required
            />
          </div>

          <div className="account-row">
            <label htmlFor="account-gender">Gender:</label>
            <select
              id="account-gender"
              name="gender"
              value={form.gender}
              onChange={update}
              required
            >
              <option value="">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Prefer not to say">
                Prefer not to say
              </option>
            </select>
          </div>

          <div className="account-row">
            <label htmlFor="account-phone">Phone Number:</label>
            <input
              id="account-phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={update}
              placeholder="Enter 10-digit number"
              maxLength={10}
              pattern="[0-9]{10}"
              title="Enter exactly 10 digits"
              required
            />
          </div>

          <div className="account-row">
            <label htmlFor="account-country">Country:</label>
            <input
              id="account-country"
              type="text"
              name="country"
              value={form.country}
              onChange={update}
              placeholder="Enter Country"
              required
            />
          </div>

          <div className="account-row">
            <label htmlFor="account-address">Home Address:</label>
            <textarea
              id="account-address"
              name="address"
              value={form.address}
              onChange={update}
              placeholder="Enter Home Address"
              rows={2}
              required
            />
          </div>

          <div className="account-row">
            <label htmlFor="account-email">Email:</label>
            <input
              id="account-email"
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              placeholder="Enter Email Address"
              required
            />
          </div>

          <div className="account-row">
            <label htmlFor="account-password">Password:</label>
            <input
              id="account-password"
              type="password"
              name="password"
              value={form.password}
              onChange={update}
              placeholder="Minimum 6 characters"
              minLength={6}
              required
            />
          </div>
        </div>

        <button className="green-button" type="submit">
          Create Account
        </button>
      </form>
    </section>
  );
}

export default AccountCreation;