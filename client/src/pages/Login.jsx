import React from "react";
import styled from "styled-components";
import { FormRow } from "../components";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <h4>Login</h4>
        <FormRow type="text" name="email" defaultValue="thang@gmail.com" />
        <FormRow type="text" name="password" defaultValue="123" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <button className="btn btn-block">Demo User</button>
        <p>
          Not a member?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
