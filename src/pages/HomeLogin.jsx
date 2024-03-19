import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sharedContext from "../context/SharedContext";

const HomeLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const BaseUrl = "https://erp-phase2-bck.onrender.com";

  const navigate = useNavigate();

  const {setRoleType} = useContext(sharedContext)

  const onChangeInput = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BaseUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email_id: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      const { accessToken, role_type } = data.data;
      localStorage.setItem("token", accessToken);
      setRoleType(role_type);

      switch (role_type) {
        case "SUPER ADMIN":
          navigate("/admin/dashboard");
          break;
        case "SALES PERSON":
          navigate("/sales/dashboard");
          break;
        case "CHANNEL PARTNER":
          navigate("/channel/dashboard");
          break;
        default:
          // Handle other roles or scenarios
          break;
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="log">
      <div className="log__Title">
        <h3>Log in to your account</h3>
        <p>Welcome back! Please enter your details</p>
      </div>
      <div className="log__Form">
        <form onSubmit={handleSubmit}>
          <div className="form_input-field">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={onChangeInput}
              name="email"
            />
          </div>
          <div className="form_input-field">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={onChangeInput}
              name="password"
              autoComplete="on"
            />
          </div>
          <div className="form_check">
            <div>
              <input
                type="checkbox"
                onChange={onChangeInput}
                checked={formData.rememberMe}
                name="rememberMe"
              />
              <span className="rem">Remember me for 30 days</span>
            </div>
            <div>
              <span className="frgt">Forgot password?</span>
            </div>
          </div>
          <div className="sbt_btn">
            <button type="submit">Sign in</button>
          </div>
          <div className="form_sign-up">
            <span>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </span>
          </div>
        </form>
        <Link to="/admin/dashboard">Admin Dash</Link>
        <Link to="/sales/dashboard">Sales Dash</Link>
        <Link to="/channel/dashboard">Channel Dash</Link>
      </div>
    </div>
  );
};

export default HomeLogin;
