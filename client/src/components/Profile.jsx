import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import Nav from "./Nav";
import Input from "./Input";
import ImgUpload from "./ImgUpload";

export const Profile = () => {
  return (
    <>
      <Nav />
      <section>
        <div className="container">
          <div className="form">
            <h2>Comple Your Profile</h2>
            <ImgUpload/>
            <form>
              <div className="group">
                <Input />
                <label htmlFor="style1" className="label">
                  Full Name
                </label>
              </div>

              <div className="group">
                <Input />
                <label htmlFor="style2" className="label">
                  Course
                </label>
              </div>
              <div className="group">
                <Input />
                <label htmlFor="style2" className="label">
                  Course
                </label>
              </div>
              <div className="group">
                <Input />
                <label htmlFor="style2" className="label">
                  Year
                </label>
              </div>
              <div className="group">
                <Input />
                <label htmlFor="style1" className="label">
                  Intrests
                </label>

                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
