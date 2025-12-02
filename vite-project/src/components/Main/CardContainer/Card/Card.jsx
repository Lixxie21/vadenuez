import "./Card.css";
const Card = (props) => {
  const { card, handleDeleteCard, handleUpdateCard } = props;
    return (
        <li className="card">
        <img className="card__image" src={card.link} alt={card.name} />
        <button
          aria-label="Remove place"
          className="card__delete-btn"
          type="button"
          onClick={() => {
            console.log(card);
            handleDeleteCard(card);
          }}
        ></button>
        <button
          aria-label="Update place"
          className="card__update-btn"
          type="button"
          onClick={() => {
            console.log(card);
            handleUpdateCard(card);
          }}
        ></button>
        <div className="card__info">
          <h2 className="card__title">{card.name}</h2>
          <button
            aria-label="Like place"
            class="card__like-btn"
            type="button"
          ></button>
        </div>
      </li>
    );
}

export default Card;