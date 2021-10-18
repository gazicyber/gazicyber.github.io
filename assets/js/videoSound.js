var isMuted = true;

function mute() {
    if (isMuted == false) {
        document.getElementById("bgVideo").muted = true;
        $('#muteItem').removeClass('fas fa-volume-up');
        $('#muteItem').addClass('fas fa-volume-mute');
        isMuted = true;
    } else if (isMuted == true) {
        document.getElementById("bgVideo").muted = false;
        $('#muteItem').removeClass('fas fa-volume-mute');
        $('#muteItem').addClass('fas fa-volume-up');
        isMuted = false;
    } else {
        alert("Bu buton şuanda kullanılamıyor");
    }
}