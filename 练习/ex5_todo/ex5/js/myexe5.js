var myAns=[];
var correctAns={
    ans:"",
    analysis:"",
    isMulti:""
}
var flag=0;
function onTimeOut(){
    $("#video")[0].pause();

    $.getJSON("data/questions.json",function(data){
        var str="";
        var index=parseInt(Math.random()*15);
        var obj=data[index];
        str+="<span>"+obj.keyConcept+"</span>"
        str+="<ul>";
        if(obj.isMulti==0){
            if(obj.optionA!="") str+="<li><input type='radio' name='option' value='A'>A "+obj.optionA+"</li>";
            if(obj.optionB!="") str+="<li><input type='radio' name='option' value='B'>B "+obj.optionB+"</li>";
            if(obj.optionC!="") str+="<li><input type='radio' name='option' value='C'>C "+obj.optionC+"</li>";
            if(obj.optionD!="") str+="<li><input type='radio' name='option' value='D'>D "+obj.optionD+"</li>";
            if(obj.optionE!="") str+="<li><input type='radio' name='option' value='E'>E "+obj.optionE+"</li>";
            if(obj.optionF!="") str+="<li><input type='radio' name='option' value='F'>F "+obj.optionF+"</li>";
         }
        else if(obj.isMulti==1){
            if(obj.optionA!="") str+="<li><input type='checkbox' name='option' value='A'>A"+obj.optionA+"</li>";
            if(obj.optionB!="") str+="<li><input type='checkbox' name='option' value='B'>B"+obj.optionB+"</li>";
            if(obj.optionC!="") str+="<li><input type='checkbox' name='option' value='C'>C"+obj.optionC+"</li>";
            if(obj.optionD!="") str+="<li><input type='checkbox' name='option' value='D'>D"+obj.optionD+"</li>";
            if(obj.optionE!="") str+="<li><input type='checkbox' name='option' value='E'>E"+obj.optionE+"</li>";
            if(obj.optionF!="") str+="<li><input type='checkbox' name='option' value='F'>F"+obj.optionF+"</li>";
        }
        str+="</ul>";
        $(".option").append(str);
        correctAns.ans=obj.ans;
        correctAns.analysis=obj.analysis;
        correctAns.isMulti=obj.isMulti;


        $(".option input").click(inputClick);
        $("#btnSubmit").click(submitClick);

        $("#result").hide();
        $("#ans").hide();
        $("#refAns").text("参考答案："+obj.ans);
        $("#refAnlysis").text("解析："+obj.analysis);

        $(".do-question").show();
       // $("#close").click(closeClick);
    }
    );
}

function inputClick(){

    if(correctAns.isMulti==0){
        myAns=[];
        myAns.push($(this).val());
    }
    else {
        myAns=[];
    $.each($(".option input"),function(i,obj){
        if(obj.checked){    
            myAns.push(obj.value);
        }
    });
    }
   // console.log(myAns);
 
}
function submitClick(){
    var ans=myAns.join("");
    //console.log(correctAns.ans);
    //console.log(ans);
    if(ans==correctAns.ans){
        $("#result").text("回答正确").css("color","green");
        flag=0;
    }
    else{
        $("#result").text("回答错误").css("color","red");
        flag=1;
    }
     $("#result").show();
    $("#ans").show();

    $("#close").click(closeClick);

}
function closeClick(){

    $("#close").off("click");
    $("#btnSubmit").off("click");
    $(".option input").off("click");

   //把修改的地方初始化
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