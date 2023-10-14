import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FormRow } from "../components";

const Register = () => {
  const Wrapper = styled.section`
    align-items: center;
    min-height: 100vh;
    display: grid;
    .form {
      max-width: 400px;
      border-top: 5px solid var(--primary-500);
    }
    h4 {
      text-align: center;
    }
    p {
      margin-top: 1rem;
      text-align: center;
      line-height: 1.5;
    }
    .member-btn {
      color: var(--primary-500);
      letter-spacing: var(--letter-spacing);
      margin-left: 0.25rem;
    }
  `;

  return (
    <Wrapper>
      <form className="form">
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="thang" />
        <FormRow
          type="text"
          name="lastName"
          lableText="last name"
          defaultValue="xuan"
        />
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow type="email" name="email" defaultValue="thang@gmail.com" />
        <FormRow type="password" name="password" defaultValue="123" />
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
