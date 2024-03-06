let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["Button1", "Button2", "Button3", "Button4"],
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore };


