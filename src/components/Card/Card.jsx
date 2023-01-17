import './Card.css';
const Card = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <span className='img-container'>
          <img src="" alt="basketball player"/>
        </span>
        <p>Name</p>
        <p>Position</p>
        <p>Stats</p>
        <div className='card-button-container'>
          <button>Button Component goes here</button>
        </div>
      </div>
    </div>
  )
}
export default Card;