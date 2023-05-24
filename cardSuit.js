function defineSuit(card) {
  switch (card[1]) {
    case "♣":
      return "clubs";
    case "♦":
      return "spades";
    case "♥":
      return "hearts";
    case "♠":
      return "diamonds";
    default:
      break;
  }
}
