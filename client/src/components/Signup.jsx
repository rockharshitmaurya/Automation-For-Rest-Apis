import React from "react";
import Nav from "./Nav";
import Input from "./Input";

const SignUp = () => {
  return (
    <>
      <Nav />
      <section>
        <div className="container">
          <div className="form">
            <h2>Sign Up</h2>
            <form>
              <div className="group">
                <Input />
                <label htmlFor="style1" className="label">
                  {" "}
                  Email{" "}
                </label>
              </div>
              <div className="group">
                <Input />
                <label htmlFor="style2" className="label">
                  {" "}
                  Username
                </label>
              </div>
              <div className="group">
                <Input />
                <label htmlFor="style1" className="label">
                  {" "}
                  Password{" "}
                </label>
              </div>
              <div className="group">
                <Input />
                <label htmlFor="style2" className="label">
                  {" "}
                  Confirm Password
                </label>
                <button className="btn btn-primary">Register</button>
              </div>
            </form>

            <form action="post" method="post" className="form">
          <button type="submit">Connected?</button>
        </form>
        
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
