import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Login,
  Contact,
  Service,
  Register,
  Error,
  Logout,
  Project,
} from "./pages";

import {
  AdminContacts,
  AdminUsers,
  AdminProjects,
  AdminServices,
  AdminUserUpdate,
} from "./pages/admin/";

import { Navbar, Footer } from "./components";
import { ToastContainer } from "react-toastify";
import AdminLayout from "./Layout/AdminLayout";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/project" element={<Project />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/*" element={<Error />} />

        {/* admin panel */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="users/update/:id" element={<AdminUserUpdate />} />
          <Route path="services" element={<AdminServices />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="projects" element={<AdminProjects />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
