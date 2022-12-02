const winAgainstEasy = (data) => {
	const variables = { // Variables de piedra, papel o tijeras
		"A": "Rock",
		"B": "Paper",
		"C": "Scissors",
		"X": "Rock",
		"Y": "Paper",
		"Z": "Scissors",
	};

	const scores = { // Valor de cada punto
		"Rock": 1,
		"Paper": 2,
		"Scissors": 3,
		"Win": 6,
		"Draw": 3,
		"Lose": 0,
	};

	let totalScore = 0; // Puntos totales

	let parseVariables = data.split(/\n/gi); 
	let parseEachVariable = parseVariables.map(el => el.split(" "));

	const getScore = parseEachVariable.map(eachMove => {

		let opponentMove = eachMove[0];
		let myMove = eachMove[1];
		let matchDecision = variables[opponentMove] === "Rock" && variables[myMove] === "Paper" || 
		variables[opponentMove] === "Scissors" && variables[myMove] === "Rock" || 
		variables[opponentMove] === "Paper" && variables[myMove] === "Scissors" ? "Win" : 
		(variables[opponentMove] === variables[myMove] ? "Draw" : "Lose");

		if (eachMove.length >1) {
			totalScore+= scores[variables[myMove]] + scores[matchDecision];
		}
	});

	return totalScore;
}

const winAgainst = (data) => {
	const variables = { // Variables de piedra, papel o tijeras
		"A": "Rock",
		"B": "Paper",
		"C": "Scissors",
		"X": "Lose",
		"Y": "Draw",
		"Z": "Win",
	};

	const scores = { // Valor de cada punto
		"Rock": 1,
		"Paper": 2,
		"Scissors": 3,
		"Win": 6,
		"Draw": 3,
		"Lose": 0,
	};

	let totalScore = 0; // Puntos totales

	let parseVariables = data.split(/\n/gi); 
	let parseEachVariable = parseVariables.map(el => el.split(" "));

	const getScore = parseEachVariable.map(eachMove => {

		let opponentMove = eachMove[0];
		let myMove = eachMove[1];

		
		if (eachMove.length >1) {

			if (variables[myMove] === "Lose" && variables[opponentMove] === "Rock") {
				totalScore+= scores["Scissors"] + scores[variables[myMove]];
			} else if (variables[myMove] === "Lose" && variables[opponentMove] === "Scissors") {
				totalScore+= scores["Paper"] + scores[variables[myMove]];
			} else if (variables[myMove] === "Lose" && variables[opponentMove] === "Paper") {
				totalScore+= scores["Rock"] + scores[variables[myMove]];
			}

			if (variables[myMove] === "Win" && variables[opponentMove] === "Rock") {
				totalScore+= scores["Paper"] + scores[variables[myMove]];
			} else if (variables[myMove] === "Win" && variables[opponentMove] === "Scissors") {
				totalScore+= scores["Rock"] + scores[variables[myMove]];
			} else if (variables[myMove] === "Win" && variables[opponentMove] === "Paper") {
				totalScore+= scores["Scissors"] + scores[variables[myMove]];
			}

			if (variables[myMove] === "Draw" ) {
				totalScore+= scores[variables[opponentMove]] + scores[variables[myMove]];
			} 

		} else {
			return;
		}
	});

	return totalScore;
}