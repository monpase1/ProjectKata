
function warnTheSheep(queue) {
    const indexWolf = queue.indexOf("wolf");
    return indexWolf + 1 == queue.length ? "Pls go away and stop eating my sheep" : "Oi! Sheep number " + 
    (queue.length - indexWolf - 1) +"! You are about to be eaten by a wolf!"
};
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));