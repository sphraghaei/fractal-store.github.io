import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap'


function App() {
  return (
    <div className='App'>
      <Navbar bg='dark'>
        <Navbar.Brand>
          Logo
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
