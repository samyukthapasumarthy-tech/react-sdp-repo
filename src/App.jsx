import { BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Registration from './Pages/Registration';
import AdminLogin from './Pages/AdminLogin';
import ManagerLogin from './Pages/ManagerLogin';
import CustomerLogin from './Pages/CustomerLogin';
import './App.css';
import MainNavBar from './Pages/MainNavBar';

function App() {
  return (
   <BrowserRouter>
   <MainNavBar/>
   </BrowserRouter>
  );
}

export default App;



