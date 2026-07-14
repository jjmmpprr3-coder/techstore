const DEFAULT_PRODUCT_IMAGE =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <rect width="800" height="600" rx="32" fill="#f3f4f6" />
      <rect x="220" y="140" width="360" height="260" rx="24" fill="#e5e7eb" />
      <path d="M280 320l82-82 58 58 58-58 82 82" fill="none" stroke="#9ca3af" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="330" cy="235" r="22" fill="#9ca3af" />
      <text x="400" y="470" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="#6b7280">Sin imagen disponible</text>
    </svg>
  `);

export default function ProductCard({ producto, agregarAlCarrito }) {
  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = DEFAULT_PRODUCT_IMAGE;
  };

  return (
    <div className="product-card">
      <img 
        src={producto.imagen || DEFAULT_PRODUCT_IMAGE} 
        alt={producto.nombre} 
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={handleImageError}
        style={{ width: "100%", height: "200px", objectFit: "contain" }} 
      />
      <h3>{producto.nombre}</h3>
      <p>{"⭐".repeat(producto.valoracion)}</p>
      <p>${producto.precio.toLocaleString('es-CL')}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  );
}
