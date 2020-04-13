

var SoundControl = function () {
    function StopMusic() {
        document.getElementById('bgMusic').pause();
        document.getElementById('attack').muted = true;
    }

    function PlayMusic() {
        document.getElementById('bgMusic').play();
        document.getElementById('attack').muted = false;
    }

    function PlayAttackSound() {
        document.getElementById('attack').play();
    }

    function PandaHit() {
        document.getElementById('explosion').play();
    }

    return {
        StopMusic: StopMusic,
        PlayMusic: PlayMusic,
        PlayAttackSound: PlayAttackSound,
        PandaHit: PandaHit
    }
};

