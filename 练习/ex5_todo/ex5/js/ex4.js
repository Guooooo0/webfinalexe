var video_text="播放";
var video=document.getElementById("video");
var video_buttun =document.getElementById("play");
video_buttun.onclick=function(e){
    if(video_text=="暂停"){
        video.pause();
        video_text="播放";
        video_buttun.innerText=video_text;
    }
    else{
        video.play();
        video_text="暂停";
        video_buttun.innerText=video_text;
    }
}
// function onLiClick(){
//     console.log($(this).text());
// }
// function addLiList(){
//     var str='<ul>';
//     for(let i=1;i<=3;i++){
//         str+='<li>第'+ i +'题</li>';
//     }
//     str+='</ul>';
//     $('.do-question li').append(str);

// }
// function init(){
//     addLiList();
//     $('.do-question li').click(onLiClick);
// }


init();