import ProductCard from './ProductCard';

export default function ProductList({ productos, agregarAlCarrito }) {
  return (
    <div className="product-grid">
      {productos.map((producto) => (
        <ProductCard 
          key={producto.id} 
          producto={producto} 
          agregarAlCarrito={agregarAlCarrito} 
        />
      ))}
    </div>
  );
}