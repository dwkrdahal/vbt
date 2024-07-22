import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

function AdminContactUpdate() {

  const params = useParams();
  const {authorizationToken, API} = useAuth();
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  })

  const handleInput = (e) => {
    const name = e.target.name;
    const value= e.target.value;

    setContact({
      ...contact,
      [name]: value
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(contact);

    try {
      const response = await fetch(`${API}/admin/contacts/update/${params.id}`, {
        method: "PATCH",
        headers: {
          Authorization: authorizationToken,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      })

      if(response.ok){
        toast.success("UPDATED")
      } else {
        toast.error("UPDATE FAILED")
      }
      
    } catch (error) {
      console.log(error)
    }
    
  }

  const getContact = async (req, res) => {
    try {
      const response = await fetch(`${API}/admin/contacts/${params.id}`,{
        method: "GET",
        headers: {
          Authorization: authorizationToken
        }
      })
      const data = await response.json();
      setContact(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect( () => {
    getContact();
  }, [])

  return (
    <section className="section-contact">
      <div className="container grid ">
        {/* contact form */}

        <div className="contact-form">
          <h1 className="main-heading">contact update page</h1>
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
                value={contact.username}
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
                value={contact.email}
                onChange={handleInput}
              />
            </div>

            <div>
              <label htmlFor="message">message</label>
              <input
                type="text"
                name="message"
                placeholder="message"
                id="message"
                required
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
              />
            </div>

            <button className="btn btn-submit" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AdminContactUpdate
