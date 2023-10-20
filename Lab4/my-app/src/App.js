// Import necessary Bootstrap components and CSS.
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import custom components.
import Create from './components/Create';
import Read from './components/Read';
import Content from './components/Content';
import './App.css';

// This is the main application component named 'App'.
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Create a navigation bar using Bootstrap. */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Create">Create</Nav.Link>
              <Nav.Link href="/Read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Define routes using 'Routes' and 'Route' components from 'react-router-dom'. */}
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          {/* Render the 'Create' component when the path is '/Create'. */}
          <Route path='/Create' element={<Create></Create>}></Route>

          {/* Render the 'Read' component when the path is '/Read'. */}
          <Route path='/Read' element={<Read></Read>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Export the 'App' component for use as the main entry point of the application.
export default App;