let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ["r", "p", "s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convert(abbr) {
	switch (abbr) {
		case "r":
			return "✊";
		case "p":
			return "🤚";
		case "s":
			return "✌️";
	}
}

function win(user, computer) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML =
		"User: " +
		convert(user) +
		" BEATs Computer: " +
		convert(computer) +
		". You win! :)";
	document.getElementById(user).classList.add("green-glow");
	setTimeout(function () {
		document.getElementById(user).classList.remove("green-glow");
	}, 1000);
}

function lose(user, computer) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML =
		"Computer: " +
		convert(computer) +
		" BEATs User: " +
		convert(user) +
		". You lose! :(";
	document.getElementById(user).classList.add("red-glow");
	setTimeout(function () {
		document.getElementById(user).classList.remove("red-glow");
	}, 1000);
}

function draw(user, computer) {
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML =
		"User: " +
		convert(user) +
		" and Computer: " +
		convert(computer) +
		". It's a draw! ;)";
	document.getElementById(user).classList.add("gray-glow");
	setTimeout(function () {
		document.getElementById(user).classList.remove("gray-glow");
	}, 1000);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp": {
			win(userChoice, computerChoice);
			console.log(userChoice + computerChoice);
			console.log("the user wins!!!");
			break;
		}
		case "rp":
		case "ps":
		case "sr": {
			lose(userChoice, computerChoice);
			console.log(userChoice + computerChoice);
			console.log("the computer wins!!!");
			break;
		}
		default: {
			draw(userChoice, computerChoice);
			console.log(userChoice + computerChoice);
			console.log("Draw!!!");
			break;
		}
	}
}

function main() {
	rock_div.addEventListener("click", function () {
		game("r");
	});

	paper_div.addEventListener("click", function () {
		game("p");
	});

	scissor_div.addEventListener("click", function () {
		game("s");
	});
}

main();
