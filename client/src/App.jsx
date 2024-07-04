import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, About, Login, Contact, Service, Register, Error} from './pages';
import {Navbar, Footer} from './components';


function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path ="/" element = {<Home/>} />
        <Route path ="/about" element = {<About/>} />
        <Route path ="/login" element = {<Login/>} />
        <Route path ="/contact" element = {<Contact/>} />
        <Route path ="/service" element = {<Service/>} />
        <Route path ="/register" element = {<Register/>} />
        <Route path ="/*" element = {<Error />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
