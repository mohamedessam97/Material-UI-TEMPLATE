import './App.css';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Container from "@mui/material/Container";
import Home from './pages/Home'
import Contact from './pages/Contact'


function App() {
  return (
    <Fragment>
      <Container maxWidth="lg">
      <Navbar/>
      {/* <Home/> */}
      <Contact></Contact>
      </Container>
    </Fragment>
  );
}

export default App;
