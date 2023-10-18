import './App.css';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Customers from './pages/Customers';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/products' element={ <Products />} />
        <Route path='/customers' element={<Customers />} />
      </Routes>
    </>
  );
}

export default App;
