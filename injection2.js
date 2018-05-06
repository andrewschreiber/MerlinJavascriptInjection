var videos = document.getElementsByClassName("fileThumb");

for (i = 0; i < videos.length; i++) {
    var myVideo = videos[i];
    myVideo.addEventListener("click", function() {
                             if (myVideo.href.slice(-4) === ".webm") {
                             var messageToPost = {'source': myVideo.href };
                             window.webkit.messageHandlers.videoClicked.postMessage(messageToPost);
                             }
                             }, false);
}

