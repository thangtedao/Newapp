import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  const Wrapper = styled.main``;

  return (
    <Wrapper>
      <form className="form">
        <h4>Register</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            defaultValue="thang"
            required
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
