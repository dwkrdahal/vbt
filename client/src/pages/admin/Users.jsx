import { useCallback, useEffect, useState } from "react"
import { useAuth } from "../../store/auth";
import { Link } from "react-router-dom";
// import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.min.css';

function AdminUsers() {

  const [users, setUsers] = useState ([]);
  const {authorizationToken} = useAuth();
  const getUserURL = "http://localhost:3000/api/admin/users";

  const getAllUsers = async (req, res) => {
    try {
      // console.log(authorizationToken); //checking token
      const response = await fetch(getUserURL, {
        method: "GET",
        headers: {
          "Authorization": authorizationToken,
        }
      });

      const data = await response.json();
      setUsers(data);
      console.log("data set");
      
    } catch (error) {
      console.log(error);
    }
  }

  const deleteUser = useCallback( async (id) => { 
    try {
      await fetch(`http://localhost:3000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": authorizationToken,
        },
      });  
      console.log("data after deletion", users);

      //refresh after deletion
      getAllUsers();

    } catch (error) {
      console.log(error);
    }
    
  }, [authorizationToken])

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <>
    <section className="admin-users-section">
      <div className="container">
        <h1>Admin Users Data</h1>
      </div>

      <div className="container admin-users">
      <table>
      <thead>
        <tr>
          <th>username</th>
          <th>email</th>
          <th>phone</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
      </thead>

      <tbody>
      {users.map((currentUser, index) => {
        return (
        <tr key={index}>
          <td>{currentUser.username}</td>
          <td>{currentUser.email}</td>
          <td>{currentUser.phone}</td>
          <td><Link to={`update/${currentUser._id}`}>Edit</Link></td>
          <td> <button onClick={() => deleteUser(currentUser._id)}>Delete</button></td>
        </tr>
        );
      })}
        
      </tbody>
    </table>

      </div>
    </section>


    </>
  )
}

export default AdminUsers
