var GameControl = function () {

    var soundControl = new SoundControl();

    function StartGame() {
        soundControl.PlayMusic();
        ResetGame();
    }

    function GameOver() {
        canAction = false;
        gameOver = true;
        $("#instruction").text("Game Over.");
        soundControl.StopMusic();
    }

    function ResetGame() {
        SetScore(0);
        canAction = true;
        gameOver = false;
        $("#instruction").text("Pick the corresponding Hiragana/Katakana !");

        $(".panda").stop().animate({ 'top': '100%' }, 300, function () {
            $(this).animate({ 'top': '21%' }, 4000, function () {
                UpdateScore(-1);
                soundControl.PandaHit();
                shake($(document.body).get(0));
            });
        });
    }

    return {
        StartGame: StartGame,
        GameOver: GameOver,
        ResetGame: ResetGame
    }
};