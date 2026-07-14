export default function ProductCard({ producto, agregarAlCarrito }) {
  return (
    <div className="product-card">
      <img src={producto.imagen} alt={producto.nombre} className="product-image" />
      <h3 className="product-name">{producto.nombre}</h3>
      <div className="product-rating">{"⭐".repeat(producto.valoracion)}</div>
      <div className="product-price">${producto.precio.toLocaleString('es-CL')}</div>
      <button className="btn-add-cart" onClick={() => agregarAlCarrito(producto)}>
        🛒 Agregar al carrito
      </button>
    </div>
  );
}