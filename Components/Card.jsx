import './Card.css'; // Import the CSS file for custom styles

const Card = ({ imageSrc, title, text, buttonText, articleUrl }) => {
  const handleReadMore = () => {
    window.location.href = articleUrl;
  };

  return (
    <div className='card-all'>
      <div className="card" style={{ width: '40rem', height: '17rem' }}>
        <div className="card-content" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={imageSrc} className="card-img" alt="Card image" style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '1rem' }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <button onClick={handleReadMore} className="btn btn-primary">{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;





