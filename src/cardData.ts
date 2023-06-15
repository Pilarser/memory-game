import homerImage from "./images/homer.jpeg";
import peterImage from "./images/peter.jpeg";
import popeyeImage from "./images/popeye.jpeg";
import donaldImage from "./images/donald.webp";
import fredImage from "./images/fred.webp";
import marioImage from "./images/mario.webp";

interface CardType {
  type: string;
  image: string;
}

export const uniqueCardsArray: CardType[] = [
  {
    type: "Homer Simpson",
    image: homerImage
  },
  {
    type: "Peter Griffin",
    image: peterImage
  },
  {
    type: "Popeye",
    image: popeyeImage
  },
  {
    type: "Donald Duck",
    image: donaldImage
  },
  {
    type: "Fred Flintstone",
    image: fredImage
  },
  {
    type: "Mario Bros",
    image: marioImage
  }
];
