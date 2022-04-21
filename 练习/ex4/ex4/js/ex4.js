var video_onplay = "播放"
var btn_video = document.getElementById("plvideo");
var playing = document.getElementById("vdo");

function init(){
    $(".do-question").hide();
}

btn_video.onclick = function onbtnplayclick(e){
    if(video_onplay == "暂停"){
        btn_video.pause();
        video_onplay = "播放";
        btn_video.innerText = video_onplay;
    }
    else{
        btn_video.play();
        video_onplay = "暂停";
        btn_video.innerText = video_onplay;
    }
}


init();

$("#plvideo").click(function()){
    
}



