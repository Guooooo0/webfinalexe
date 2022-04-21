// var video_text="播放";
// var video=document.getElementById("video");
// var video_buttun =document.getElementById("play");
// video_buttun.onclick=function(e){
//     if(video_text=="暂停"){
//         video.pause();
//         video_text="播放";
//         video_buttun.innerText=video_text;
//     }
//     else{
//         video.play();
//         video_text="暂停";
//         video_buttun.innerText=video_text;
//     }
// }
var flag=0;
var userAns=[];
var correctAns={
    ans:"",
    analysis:"",
    isMulti:0
}
function onTimeOut(){
    $("#video")[0].pause();
    $.getJSON("data/questions.json",function(data){
        var index=parseInt(Math.random()*15);
        var obj=data[index];
        var str="";
        $(".content").text(obj.content);
        //选项
        str+="<ul>";
        if(obj.isMulti==0){
            if(obj.optionA!="")  str+="<li><input type='radio' value='A' name='option'> A "+obj.optionA;
            if(obj.optionB!="")  str+="<li><input type='radio' value='B' name='option'> B "+obj.optionA;
            if(obj.optionC!="")  str+="<li><input type='radio' value='C' name='option'> C "+obj.optionA;
            if(obj.optionD!="")  str+="<li><input type='radio' value='D' name='option'> D "+obj.optionA;
            if(obj.optionE!="")  str+="<li><input type='radio' value='E' name='option'> E "+obj.optionA;
            if(obj.optionF!="")  str+="<li><input type='radio' value='F' name='option'> F "+obj.optionA;
        }
        else{
            if(obj.optionA!="")  str+="<li><input type='checkbox' value='A' name='option'> A "+obj.optionA;
            if(obj.optionB!="")  str+="<li><input type='checkbox' value='B' name='option'> B "+obj.optionA;
            if(obj.optionC!="")  str+="<li><input type='checkbox' value='C' name='option'> C "+obj.optionA;
            if(obj.optionD!="")  str+="<li><input type='checkbox' value='D' name='option'> D "+obj.optionA;
            if(obj.optionE!="")  str+="<li><input type='checkbox' value='E' name='option'> E "+obj.optionA;
            if(obj.optionF!="")  str+="<li><input type='checkbox' value='F' name='option'> F "+obj.optionA;
        }
        str+="</ul>";
        $(".option").append(str);
        //答案与解析



        $(".option input").click(onInputClick);
        $("#btnSubmit").click(onBtnSubmitClick);
        $("#result").hide();
        $("#ans").hide();



        correctAns.ans=obj.ans;
        correctAns.analysis=obj.analysis;
        correctAns.isMulti=obj.isMulti;
        $("#refAns").text("参考答案："+obj.ans);
        $("#refAnlysis").text("解析："+obj.analysis);


        //完成答题框后显示
        $(".do-question").show();
    });

}
//获取答案
function onInputClick(){
    if(correctAns.isMulti==0){
        userAns=[];
        userAns.push($(this).val());
    }
    else{
        userAns=[];
        $.each($(".option input"),function(i,obj){
            if(obj.checked)     userAns.push(obj.value);
        })
    }
    console.log(userAns);
}
//提交答案
function onBtnSubmitClick(){
   // console.log(correctAns.ans);
    var ans=userAns.join("");
   // console.log(ans);
    if(ans==correctAns.ans){
        $("#result").text("回答正确");
        $("#result").css("color","green");
        $("#result").show(); 
        flag=0;     
    }
    else{
        $("#result").text("回答错误");
        $("#result").css("color","red");
        $("#result").show();      
        flag=1;   
    }
    $("#ans").show();
    $("#close").click(onCloseClick);
}

function  onCloseClick(){
    $("#close").off("click");
    $("#btnSubmit").off("click");
    $(".option input").off("click");


   $("#ans").hide();
   $(".option").html("");
   $("#result").text("");

    if(flag == 1){
        setTimeout(onTimeOut,2000);
    }
    $(".do-question").hide();
    $("#video")[0].play();
}

function init(){
    $(".do-question").hide();
    $("#video")[0].play();
    setTimeout(onTimeOut,2000);
}

init();