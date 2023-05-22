// function points(games) {
//     let sum = 0;
//     for (let i = 0; i < games.length; i++){
//         sum += games[i][0] > games[i][2] ? 3 : games[i][0] == games[i][2] ? 1 : 0;
//     }
//     return sum;
// }

const pointsUp = (games) => {
  return games.reduce(
    (value, oldValue, index, games) =>
      value +
      (oldValue[0] > oldValue[2] ? 3 : oldValue[0] == oldValue[2] ? 1 : 0),
    0
  );
};

console.log(pointsUp(["1:0", "2:0", "3:3"]));
