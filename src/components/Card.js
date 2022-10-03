import Heart from "./Heart";
import "../assets/css/card.css";

function Card(props) {
    return (
        <div className="card">
            <Heart onClick={() => props.onClick()} filled={props.isFav} />
            <img className="foto" src={props.url} alt={props.alt} />
            <p>{props.alt}</p>
        </div>
    );
}
export default Card;
