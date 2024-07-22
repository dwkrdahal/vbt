import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";

export default function Contact() {
  const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
  };

  const [msg, setMsg] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const [msgErr, setMsgErr] = useState("");
 
  const { user, API } = useAuth();
  const contactURL = `${API}/form/contact`;

  useEffect(() => {
    // console.log("i am here",user);
    if (user && userData) {
      setMsg({
        username: user.username || "",
        email: user.email || "",
        message: "",
      });

      setUserData(false);
    }
  }, [user]);

  const handleInput = (e) => {
    // console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    // first approach
    setMsg({
      ...msg,
      [name]: value,
    });

    //second approach
    // setMsg((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));

    if (name === "message") {
      if (value.length < 4) {
        setMsgErr("Message is too short");
      } else {
        setMsgErr("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log(msg);
      const response = await fetch(contactURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(msg),
      });

      if (response.ok) {
        setMsg({
          message: ""
        });
        toast.success("Message sent succesfully!");
      }
    } catch (error) {
      toast.error("Error while sending message");
    }
  };

  return (
    <>
      <main>
        <section className="section-contact">
          <div className="container contact-content "></div>

          <div className="container grid grid-two-cols">
            <div className="contact-img">
              <img src="images/support.png" alt="we are ready 24/7" />
            </div>

            {/* contact form */}

            <div className="contact-form">
              <h1 className="main-heading">Contact Form</h1>
              <br />

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    id="username"
                    required
                    autoComplete="off"
                    value={msg.username}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your email here"
                    id="email"
                    required
                    autoComplete="off"
                    value={msg.email}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="message">message</label>
                  <textarea
                    name="message"
                    placeholder="message"
                    id="message"
                    rows="6"
                    cols="30"
                    required
                    autoComplete="off"
                    value={msg.message}
                    onChange={handleInput}
                  />
                  {msgErr && <p style={{ color: "red" }}>{msgErr}</p>}
                </div>

                <button className="btn btn-submit" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <section className="container mb-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28267.544793161775!2d85.30472338199613!3d27.672696775626026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c50daa2fb1%3A0x6f197fa38097b530!2sPatan%20Darbar%20Square!5e0!3m2!1sen!2snp!4v1720095292398!5m2!1sen!2snp"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
        </section>
      </main>
    </>
  );
}
