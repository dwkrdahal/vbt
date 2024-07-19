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

import { Navbar, Footer } from "./components";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AdminLayout from "./Layout/AdminLayout";
import {Contacts, Users, Projects, Services} from "./pages/admin/";

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
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="users" element={<Users/>} />
          <Route path="services" element={<Services/>} />
          <Route path="contacts" element={<Contacts/>} />
          <Route path="projects" element={<Projects/>} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
