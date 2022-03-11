import pin from "../assets/pin.svg";

export default function Card() {
  return (
    <div className="card">
      <img
        src="https://source.unsplash.com/WLxQvbMyfas"
        alt="Card image"
        className="card__img"
      />
      <div className="card__group--text">
        <div className="card__group--location">
          <img src={pin} alt="Location pin" className="card__img-pin" />
          <p className="card__country">Country</p>
          <a href="#" className="card__link">
            View on Google Maps
          </a>
        </div>
        <h1 className="card__title">Title</h1>
        <p className="card__date">Date</p>
        <p className="card__description">Description</p>
      </div>
    </div>
  );
}
