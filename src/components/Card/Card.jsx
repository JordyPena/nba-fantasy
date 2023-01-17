import "./Card.css";
import Button from "../button/Button";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <span className="img-container">
          <img src="" alt="basketball player" />
        </span>
        <p>Name</p>
        <p>Position</p>
        <p>Stats</p>
        <div className="card-button-container">
          <Button buttonTxt="Add To Roster" />
        </div>
      </div>
    </div>
  );
};
export default Card;
