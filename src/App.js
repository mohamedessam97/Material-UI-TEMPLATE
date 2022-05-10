import './App.css';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Container from "@mui/material/Container";
import Home from './pages/Home'
import Contact from './pages/Contact'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    // <Fragment>
    //   <Container maxWidth="lg">
    //   <Navbar/>
    //   {/* <Home/> */}
    //   <Contact></Contact>
    //   </Container>
    // </Fragment>
    <BrowserRouter>
    <Container maxWidth="lg">
       <Navbar/>
    <Routes>

      {/* <Route path="/" element={<App />}/> */}
      <Route path="/" element={<Home />}/>
      <Route path="contact" element={<Contact />}/>
    </Routes>
    </Container>
    </BrowserRouter>
  );
}

export default App;
