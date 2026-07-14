import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/banner';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import productosJSON from './data/productos.json';

function App() {
  // Estado para el carrito de compras (inicia en 0)
  const [cart, setCart] = useState([]);
  // Estado para los productos cargados desde el JSON
  const [productos, setProductos] = useState(productosJSON);

  // Función para agregar al carrito y actualizar el estado
  const agregarAlCarrito = (producto) => {
    setCart([...cart, producto]);
  };

  return (
    <div>
      {/* Pasamos la cantidad del carrito por Props al Header */}
      <Header cartCount={cart.length} />
      <Navbar />
      <Banner />

      <div className="main-section">
        <div className="content-section">
          <div className="section-title">
            <h2>Productos Destacados</h2>
            <a href="#" className="ver-todos">Ver todos</a>
          </div>
          {/* Pasamos los productos y la función por Props */}
          <ProductList productos={productos} agregarAlCarrito={agregarAlCarrito} />
        </div>
        <Sidebar />
      </div>

      <div className="bottom-bar">
         <div className="bottom-item">💳 Hasta 12 cuotas sin interés</div>
         <div className="bottom-item">🚚 Despachos en 24 a 48 horas</div>
         <div className="bottom-item">🔄 Devoluciones fáciles</div>
         <div className="bottom-item">🛡️ Calidad garantizada</div>
      </div>

      <Footer />
    </div>
  );
}

export default App;