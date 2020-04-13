

var SoundControl = function () {
    function StopMusic() {
        document.getElementById('bgMusic').pause();
        document.getElementById('attack').muted = true;
    }

    function PlayMusic() {
        document.getElementById('bgMusic').play();
        document.getElementById('attack').muted = false;
        document.getElementById('explosion').muted = false;
    }

    function PlayAttackSound() {
        document.getElementById('attack').play();
    }

    function PandaHit() {
        document.getElementById('explosion').play();
    }

    function MuteEverything() {
        document.getElementById('bgMusic').pause();
        document.getElementById('attack').muted = true;
        document.getElementById('explosion').muted = true;
    }

    return {
        StopMusic: StopMusic,
        PlayMusic: PlayMusic,
        PlayAttackSound: PlayAttackSound,
        PandaHit: PandaHit,
        MuteEverything: MuteEverything
    }
};

