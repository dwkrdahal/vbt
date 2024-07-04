import React from 'react'
import { useState } from 'react'

export default function Login() {

  const [user, setUser] = useState({
    email: "ch",
    password: "ecj",
  })


  const handleInput =(e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(e);

    setUser ({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);  //ready to send backend
  }

  return (
    <section>
      <main>
        <div className="section-login">
          <div className="container grid grid-two-cols">
            <div className="login-image">
              <img src="images/login.png" alt="lets login" width="500" height="500"/>
            </div>

            {/* login form */}
            <div className="login-form">
              <h1 className="main-heading mb-3">login form</h1>
              <br />

              <form action="" onSubmit={handleSubmit}>
                
                <div>
                  <label htmlFor="email">email</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder='email' 
                    id='email'
                    required
                    autoComplete='off'
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="password">password</label>
                  <input 
                    type="password" 
                    name="password" 
                    placeholder='password' 
                    id='password'
                    required
                    autoComplete='off'
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>

                <br />

                <button className="btn btn-submit" type='submit'>Login Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
