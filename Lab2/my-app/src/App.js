import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Content">create</Nav.Link>
            <Nav.Link href="/Footer">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

      <Routes>
        <Route path="/" element={<Content></Content>}></Route>
      </Routes>

        {/* <Header></Header>
        <Content></Content>
      <Footer></Footer> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
