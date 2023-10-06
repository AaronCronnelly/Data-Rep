import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header
        className="App-header">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
