import "./Card.css";
import Button from "../button/Button";

const Card = ({ player }) => {
  console.log("in card", player);
  return (
    <div className="card-container">
      <div className="card">
        <span className="img-container">
          <img src="" alt="basketball player" />
        </span>
        {player && (
          <>
            <p>First Name: {player.first_name}</p>
            <p>Last Name: {player.last_name}</p>
            {player.position && <p>Position: {player.position}</p>}
            <p>Team: {player.team?.full_name}</p>
          </>
        )}
        <div className="card-button-container">
          <Button buttonTxt="Add To Roster" />
        </div>
      </div>
    </div>
  );
};
export default Card;
