import pin from "../assets/pin.svg";

export default function Card({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  const date = `${startDate} - ${endDate}`;

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card__img" />
      <div className="card__group--text">
        <div className="card__group--location">
          <img src={pin} alt="Location pin" className="card__img-pin" />
          <p className="card__country">{location}</p>
          <a
            href={googleMapsUrl}
            className="card__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="card__title">{title}</h1>
        <p className="card__date">{date}</p>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}
