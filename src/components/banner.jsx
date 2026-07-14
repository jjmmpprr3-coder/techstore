export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <h1>La tecnología que lleva tu mundo al siguiente nivel</h1>
        <p>Descubre los mejores productos en tecnología con las mejores ofertas.</p>
        <button className="btn-ofertas">VER OFERTAS &gt;</button>
      </div>
      <div className="banner-image">
        <img 
          src="https://m.media-amazon.com/images/I/71-FHcMZkcL._AC_SL1500_.jpg" 
          alt="Notebook Gamer" 
          style={{borderRadius: "8px", width: "100%"}}
        />
      </div>
    </div>
  );
}