import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, About, Login, Contact, Service, Register, Error, Logout} from './pages';
import {Navbar, Footer} from './components';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <BrowserRouter>

      <Navbar />
      <ToastContainer/>

      <Routes>
        <Route path ="/" element = {<Home/>} />
        <Route path ="/about" element = {<About/>} />
        <Route path ="/contact" element = {<Contact/>} />
        <Route path ="/service" element = {<Service/>} />
        <Route path ="/register" element = {<Register/>} />    
        <Route path ="/login" element = {<Login/>} />
        <Route path ="/logout" element = {<Logout/>} />
        <Route path ="/*" element = {<Error />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
