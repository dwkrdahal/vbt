import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import {toast} from "react-toastify";
import { Link } from "react-router-dom";

function AdminContacts() {

  const {authorizationToken, API} = useAuth();
  const [contacts, setContacts] = useState([])

  const getAllContacts = async (req, res) => {
    const response = await fetch(`${API}/admin/contacts`, {
      method: "GET",
      headers: {
        "Authorization": authorizationToken,
      }
    })

    if(response.ok){
      const data = await response.json();
      setContacts(data);
      console.log(data);

    }
  }

  const deleteContact = useCallback ( async (id) => {
    try {
      await fetch(`${API}/admin/contacts/delete/${id}`,{
        method: "DELETE",
        headers: {
          Authorization: authorizationToken
        },
      });
      toast.success("DELETED")
      //referesh list
      getAllContacts();
    } catch (error) {
      console.log(error);
    }

  }, [authorizationToken])

  useEffect(() => {
    getAllContacts();
  }, [])


  return (
    <section className="admin-contacts-section">
      <div className="container">
        <h1>Admin Message Data</h1>
      </div>

      <div className="container admin-contacts">
        <table>
          <thead>
            <tr>
              <td>username</td>
              <td>email</td>
              <td>message</td>
              <td>edit</td>
              <td>delete</td>
            </tr>
          </thead>

          <tbody>
            {contacts.map((currentContact, index) => {
              return(
                <tr key={index}>
                  <td>{currentContact.username}</td>
                  <td>{currentContact.email}</td>
                  <td>{currentContact.message}</td>
                  <td><Link to={`update/${currentContact._id}`}>Edit</Link></td>
                  <td><button onClick={() => deleteContact(currentContact._id)}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AdminContacts
