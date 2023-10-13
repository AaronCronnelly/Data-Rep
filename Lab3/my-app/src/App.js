import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './components/Create';
import Read from './components/Read';
import Books from './components/books';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/book">Home</Nav.Link>
              <Nav.Link href="/Create">Create</Nav.Link>
              <Nav.Link href="/Read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
        
          <Route path='/Create' element={<Create></Create>}></Route>
          <Route path='/Read' element={<Read></Read>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
