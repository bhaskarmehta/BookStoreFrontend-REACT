import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster />
    </>
  )
}

export default App
