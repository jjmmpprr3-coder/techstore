import SearchBar from './SearchBar';
import Cart from './Cart';

export default function Header({ cartCount }) {
  return (
    <header className="header-top">
      <div className="header-left">
        <div className="logo">🛒 TechStore</div>
        <SearchBar />
      </div>
      <div className="header-right">
        <button className="header-btn">👤 Iniciar Sesión</button>
        <button className="header-btn">📝 Registrarse</button>
        
        {/* Aquí pasamos el estado del carrito */}
        <Cart count={cartCount} />
        
        <div className="header-btn">
          🌐
        </div>
      </div>
    </header>
  );
}