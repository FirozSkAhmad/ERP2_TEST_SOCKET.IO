import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const SignUp = () => {
  const [formData, setFormData] = useState({ role_type: "" });

  const handleRoleChange = (e) => {
    setFormData({ ...formData, role_type: e.target.value });
  };

  return (
        <div className="signUp">
          <div className="log__Title">
            <h3>Create an account</h3>
          </div>
          <div className="log__Form">
            <form>
              <div className="form_input-field">
                <label htmlFor="name" className="form-label">
                  Name*
                </label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className="form_input-field">
                <label htmlFor="email" className="form-label">
                  Email*
                </label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form_input-field">
                <label htmlFor="password" className="form-label">
                  Password*
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Create a password"
                />
              </div>
              <div className="form_input-field">
                <label htmlFor="role" className="form-label">
                  Role*
                </label>
                <select
                  id="role"
                  className="form-label"
                  value={formData.role_type}
                  onChange={handleRoleChange}
                >
                  <option id="" value="" style={{ fontSize: "14px" }}>
                    Select your role
                  </option>
                  <option value="super-admin" style={{ fontSize: "14px" }}>
                    Super Admin
                  </option>
                  <option value="manager" style={{ fontSize: "14px" }}>
                    Manager
                  </option>
                  <option value="channel-partner" style={{ fontSize: "14px" }}>
                    Channel Partner
                  </option>
                  <option value="sales-person" style={{ fontSize: "14px" }}>
                    Sales Person
                  </option>
                </select>
              </div>
              {formData.role_type === "channel-partner" && (
                <>
                  <div className="form_input-field">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input type="text" id="address" placeholder="Address" />
                  </div>
                  <div className="form_input-field">
                    <label htmlFor="contact" className="form-label">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      placeholder="Enter Contact Number"
                    />
                  </div>
                  <div className="form_input-field">
                    <label htmlFor="pancard" className="form-label">
                      Pancard Number
                    </label>
                    <input
                      type="text"
                      id="pancard"
                      placeholder="Enter Pancard Number"
                    />
                  </div>
                  <div className="form_input-field">
                    <label htmlFor="account" className="form-label">
                      Bank A/C Number
                    </label>
                    <input
                      type="number"
                      id="account"
                      placeholder="Enter Bank A/C Number"
                    />
                  </div>
                  <div className="form_input-field">
                    <label htmlFor="experience" className="form-label">
                      Business Experience
                    </label>
                    <input
                      type="text"
                      id="experience"
                      placeholder="Enter Business Experience"
                    />
                  </div>
                </>
              )}
              <div className="sbt_btn">
                <button type="submit">Get Started</button>
              </div>
              <div className="form_sign-up">
                <span>
                  Already have an account? <Link to="/">Sign In</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
  );
};

export default SignUp;
