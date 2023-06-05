const whoseMove = (l, w) =>
	l === "white" && w === true
		? "white"
		: l === "black" && w === false
		? "white"
		: "black";
