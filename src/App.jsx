import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/banner';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import productosJSON from './data/productos.json';

function App() {
  const [cart, setCart] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  const agregarAlCarrito = (producto) => {
    setCart([...cart, producto]);
  };

  const productosFiltrados = productosJSON.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <Header cartCount={cart.length} onSearch={setBusqueda} />
      <Navbar />
      <Banner />
      <div className="main-section">
        <div className="content-section">
          <ProductList productos={productosFiltrados} agregarAlCarrito={agregarAlCarrito} />
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;