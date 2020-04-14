

var SoundControl = function () {

    function StopMusic() {
        ToggleMusic("bg-music", false);
    }

    function PlayMusic() {
        var target = document.getElementById("bg-music");
        if (!target.muted) {
            ToggleMusic("bg-music", true);
        }
    }

    function ToggleMusic(targetId, turnOn) {
        var target = document.getElementById(targetId);
        var isPlaying = !target.paused;

        if (turnOn != true && turnOn != false) {
            if (isPlaying) {
                target.pause();
            } else {
                target.play();
            }
        }
        else if (turnOn) {
            if (!isPlaying) {
                target.play();
            }
        }
        else // turnOn == false
        {
            if (isPlaying) {
                target.pause();
            }
        }
    }

    function ToggleSound(targetId, turnOn) {
        var target = document.getElementById(targetId);
        var isOn = !target.muted;

        if (turnOn != true && turnOn != false) {
            target.muted = !target.muted;
        }
        else if (turnOn) {
            if (!isOn) {
                target.muted = false;
            }
        }
        else // turnOn == false
        {
            if (isOn) {
                target.muted = true;
            }
        }
    }

    function ToggleBGMusic(turnOn) {
        ToggleSound("bg-music", turnOn);
    }

    function ToggleAllSounds(turnOn) {
        ToggleSound('touch', turnOn);
        ToggleSound('explosion', turnOn);
    }

    function PlayAttackSound() {
        //document.getElementById("touch").load();
        document.getElementById("touch").play();
    }

    function PandaHit() {
        //document.getElementById("explosion").load();
        console.log("pandahit")
        document.getElementById("explosion").play();
    }

    return {
        StopMusic: StopMusic,
        PlayMusic: PlayMusic,
        PlayAttackSound: PlayAttackSound,
        PandaHit: PandaHit,
        ToggleBGMusic: ToggleBGMusic,
        ToggleAllSounds: ToggleAllSounds
    }
};

