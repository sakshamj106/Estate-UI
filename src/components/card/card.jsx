import { Link } from 'react-router-dom';
import './card.scss';

function Card({ item }) {
  return (
    <div className='card'>
      <Link to={`${item.id}`} className='imageContainer'>
        {item.images && item.images.length > 0 ? (
          <img src={item.images[0]} alt={item.title || 'Property Image'} />
        ) : (
          <img src="/default-image.png" alt="Default Property" /> // Provide a default image if item.images is not available
        )}
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="Location" />
          <span>{item.address}</span>
        </p>
        <p className="price"> {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="Bedroom" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="Bathroom" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="Save" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="Chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
