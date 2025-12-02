import Card from "./Card/Card";
import "./CardContainer.css";

const CardContainer = (props) => {
    const { cards, handleDeleteCard, handleUpdateCard } = props;

    return (
        <div className="card-container">
            <ul className="card-container__list">
                {cards && cards.length > 0 ? (
                    cards.map((card) => (
                        <Card
                            key={card.id}
                            card={card}
                            handleDeleteCard={handleDeleteCard}
                            handleUpdateCard={handleUpdateCard}
                        />
                    ))
                ) : (
                    <p>No hay tarjetas disponibles</p>
                )}
            </ul>
        </div>
    );
};


export default CardContainer;