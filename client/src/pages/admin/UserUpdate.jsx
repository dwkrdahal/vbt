import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

function AdminUserUpdate() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const { authorizationToken, API } = useAuth();
  const params = useParams();

  const getUser = async (req, res) => {
    try {
      // console.log("params",params);
      const response = await fetch(
        `${API}/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // console.log(user);

      const response = await fetch(
        `${API}/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        toast.success("UPDATED");
      } else {
        toast.error("FAILED");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <section className="section-contact">
      <div className="container grid ">
        {/* contact form */}

        <div className="contact-form">
          <h1 className="main-heading">User update page</h1>
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
                value={user.username}
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
                value={user.email}
                onChange={handleInput}
              />
            </div>

            <div>
              <label htmlFor="phone">phone</label>
              <input
                type="number"
                name="phone"
                placeholder="phone"
                id="phone"
                rows="6"
                cols="30"
                required
                autoComplete="off"
                value={user.phone}
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
  );
}

export default AdminUserUpdate;
