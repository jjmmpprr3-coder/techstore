import SearchBar from './SearchBar';
import Cart from './Cart';

export default function Header({ cartCount, onSearch }) {
  return (
    <header className="header-top">
      <div className="header-left">
        <div className="logo">🛒 TechStore</div>
        <SearchBar onSearch={onSearch} />
      </div>
      <Cart count={cartCount} />
    </header>
  );
}