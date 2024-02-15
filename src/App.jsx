import './App.css';
import { Routes, Route } from 'react-router-dom';
import Routers from './pages/Routers';
import Servicios from './pages/Servicios';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="Servicios" element={<Servicios />} />
        <Route path="Nosotros" element={<Nosotros />} />
        <Route path="Productos" element={<Productos />} />
        <Route path="/" element={<Routers />} >
      </Route>
    </Routes>
  </div>
  );
}

export default App;