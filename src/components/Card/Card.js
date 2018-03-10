import React from "react";
import "./Card.css";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class Card extends React.Component {

  render(){
    const shuffledCards = shuffleArray(this.props.cards);
  // insert
    return (
      <div className="card-div">
        {shuffledCards.map((item) => (
          <div className="card click-item" onClick={() => { this.props.handleClick(item.id)}} key={item.id} style={{
            backgroundImage: item.image ? `url(${item.image})` : "none"
          }}
          />)
        )}
      </div>
    );
  //end
  }
}


export default Card;
