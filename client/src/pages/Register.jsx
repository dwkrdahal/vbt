import { set } from "mongoose";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";

function Register() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const {storeTokenInLS, API} = useAuth();
  const [phoneError, setPhoneError] = useState("");

  const RegURL = `${API}/auth/reg`

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });

    // error for phone number
    if (name === "phone") {
      if (value.length < 10) {
        setPhoneError("must be 10 digit");
      } else {
        setPhoneError("");
      }
    }
  };

  // handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(RegURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("response from the server", res_data.message);

      if (response.ok) {
        // Show success toast
        toast.success("User registered successfully!");

        storeTokenInLS(res_data.token);

        setUser({ username: "", email: "", phone: "", password: "" });
        // navigate to another page after 2 sec
        setTimeout(() => {
          toast.info("Redirected to Home Page");
          navigate("/");
        }, 2000);

        console.log(response);
      } else{
        toast.error(res_data.extraMessage ? res_data.extraMessage : res_data.message);
      }
    } catch (error) {
      toast.error("Registration failed");
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="images/register.png"
                  alt="they are trying to register"
                  width="500"
                  height="500"
                />
              </div>

              {/* registration form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">registrtaion form</h1>
                <br />

                <form action="" onSubmit={handleSubmit}>
                  <div className="username-input">
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="email-input">
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="phone-input">
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="valid phone number"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                      pattern="[0-9]{10,}"
                      title="Phone number must be at least 10 digits"
                    />
                    {phoneError && <p style={{ color: "red" }}>{phoneError}</p>}
                  </div>

                  <div className="password-input">
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>

                  <button className="btn btn-submit" type="submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Register;
