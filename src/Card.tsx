import React from "react";
import classnames from "classnames";
import prof from "./images/prof.jpeg";

interface CardProps {
  onClick: (index: number) => void;
  card: {
    type: string;
    image: string;
  };
  index: number;
  isInactive: boolean;
  isFlipped: boolean;
  isDisabled: boolean;
}

const Card: FC<CardProps> = ({
  onClick,
  card,
  index,
  isInactive,
  isFlipped,
  isDisabled
}) => {
  const handleClick = () => {
    if (!isFlipped && !isDisabled) {
      onClick(index);
    }
  };
  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={prof} alt="Brain character" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt={card.type} />
      </div>
    </div>
  );
};

export default Card;
