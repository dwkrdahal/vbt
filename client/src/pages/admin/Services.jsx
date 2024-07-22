import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import {toast} from "react-toastify";
import {Link} from "react-router-dom"


function AdminServices() {
  const [services, setServices] = useState([]);
  const { authorizationToken, API } = useAuth();
  const URL = "";

  const getAllServices = async (req, res) => {
    try {
      const response = await fetch(`${API}/admin/services`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      setServices(data);
      console.log("ok");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteService = useCallback(async (id) => {
    try {
      const response = await fetch(
        `${API}/admin/services/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      toast.success("DELETED")
      
      getAllServices();
    } catch (error) {
      console.log(error);
    }
  }, [authorizationToken]);

  useEffect(() => {
    getAllServices();
  }, [deleteService]);

  return (
    <>
      <section className="admin-services-section">
        <div className="container">
          <h1>Admin Services Data</h1>
        </div>

        <div className="container admin-services">
          <table>
            <thead>
              <tr>
                <td>service</td>
                <td>description</td>
                <td>price</td>
                <td>provider</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {services.map((currentService, index) => {
                return (
                  <tr key={index}>
                    <td>{currentService.service}</td>
                    <td>{currentService.description}</td>
                    <td>{currentService.price}</td>
                    <td>{currentService.provider}</td>
                    <td> <Link to={`${currentService._id}`}>Edit</Link></td>
                    <td>
                      <button onClick={() => deleteService(currentService._id)}>
                        {" "}
                        Delete{" "}
                      </button>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AdminServices;
