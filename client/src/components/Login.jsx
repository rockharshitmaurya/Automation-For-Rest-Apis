import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Input from "./Input";
const Login = () => {
  return (
    <>
      <Nav />
      <section>
        <div className="container">
          <div className="form">
            <h2>Login</h2>
            <form>
              <div className="group">
                <Input />
                <label htmlFor="style1" className="label">
                  Username
                </label>
              </div>
              <div className="group">
                <Input />
                <button className="btn btn-primary">Login</button>
                <label htmlFor="style2" className="label">
                  Password
                </label>
              </div>
              <p className="forget">
                Forgot Password? <a href="#">Click Here</a>
              </p>
              <p className="forget">
                Don't have an account? <Link to="/signup">Sign-Up</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
