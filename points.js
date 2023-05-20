function points(games) {
    let sum = 0;
    for (let i = 0; i < games.length; i++){
        sum += games[i][0] > games[i][2] ? 3 : games[i][0] == games[i][2] ? 1 : 0;
    }
    return sum;
}