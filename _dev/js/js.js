let foopicker = new FooPicker({
    id: 'datepicker',
    dateFormat: 'dd/MM/yyyy'
});

$('.btn-date').on('click', function () {
    let datepicker = $('#datepicker');
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    let year = date.getFullYear()

    datepicker.val(`${day}/${month}/${year}`)
})


$('.play-btn').on('click', function() {
    initVideo()
})



function initVideo() {
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;



}

function onYouTubeIframeAPIReady() {
    const videoBlock = $('#player');
    let videoId = videoBlock.data('video-id');
    let videoHeight = videoBlock.height()
    let videoWidth = videoBlock.width();

    console.log(videoId)

    player = new YT.Player('player', {
        height: videoHeight,
        width: videoWidth,
        videoId: videoId,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}





