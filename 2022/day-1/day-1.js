const elfWithTheMostCalories = (data) => {
	let mostCaloriesElf = 0;

	let parseElf = data.split(/\n\n/gi); // Divide el input por espacios en blanco
	let parseElfCalories = parseElf.map(calories => calories.split(/\n/).map(calories => Number(calories))); // Divide cada caloria de cada elfo y la convierte en número
	let totalElfCalories = parseElfCalories.map(calories => calories.reduce((calories, next) => calories+next, 0)); // Suma las calorías de cada elfo

	let findTheElf = totalElfCalories.map(calories => {
		if (calories > mostCaloriesElf) {
			mostCaloriesElf = calories; // Encuentra el elfo con el mayor número de calorías
		};
	});

	return mostCaloriesElf;
}

const elfsWithTheMostCalories = (data) => {
	let parseElf = data.split(/\n\n/gi); // Divide el input por espacios en blanco
	let parseElfCalories = parseElf.map(calories => calories.split(/\n/).map(calories => Number(calories))); // Divide cada caloria de cada elfo y la convierte en número
	let totalElfCalories = parseElfCalories.map(calories => calories.reduce((calories, next) => calories+next, 0)); // Suma las calorías de cada elfo

	let findTheElfs = totalElfCalories.sort((firstElf, secondElf) => secondElf - firstElf); // Ordena de mayor a menor el array

	return `Total top three calories: ${findTheElfs[0] + findTheElfs[1] + findTheElfs[2]}`;
}