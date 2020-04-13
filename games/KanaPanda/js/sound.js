

var SoundControl = function () {
    var bg = new Audio("media/bg.mp3");
    bg.loop = true;
    var touch = new Audio("media/swosh-01.wav");
    var explosion = new Audio("media/explosion.mp3");

    function StopMusic() {
        bg.pause();
        touch.muted = true;
    }

    function PlayMusic() {
        bg.play();
        touch.muted = false;
        explosion.muted = false;
    }

    function PlayAttackSound() {
        touch.play();
    }

    function PandaHit() {
        explosion.play();
    }

    function MuteEverything() {
        bg.pause();
        touch.muted = true;
        explosion.muted = true;
    }

    return {
        StopMusic: StopMusic,
        PlayMusic: PlayMusic,
        PlayAttackSound: PlayAttackSound,
        PandaHit: PandaHit,
        MuteEverything: MuteEverything
    }
};

