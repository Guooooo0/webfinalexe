/*
    function:ex3
    author:周一45邹成明
    version:
    build-date:
    【说明】
    1、CSS布局
    2、单击左边的数字Li可以在右边的canvas上显示对应的数字
    3、单击【C】键可以往前清除1位数字
    4、单击【AC】键可以清除canvas上所有的数字

    【提示】
    1、CSS布局可用flex实现
    2、注册li的单击事件，事件处理里根据按下不同的li按钮来做不同的功能处理
    3、元素对象获取除了document.getElementById的方法，还可以用document.getElementsByTagName等
    4、文本内容可以通过页面元素对象的innerText属性获得，显示也是通过该属性赋值给页面元素对象

*/

//根据说明和提示补全js代码

var Liarr = document.   ("li");
var disp = document.getElementById("disp");
var text=""


function drawText(text){
    disp.innerText=text;
}

function onLiClick(){
    // var num=e.target.innerText;
    var num=this.innerText;
    if(num==="C"){
        text=text.substring(0,text.length-1);
    }
    else if(num==="AC"){
        text="";
    }
    else{
        text+=num;
    }
    drawText(text);
}

function init(){
    for(i=0;i<Liarr.length;i++){
        Liarr[i].onclick=onLiClick;
    }   
}

init();
function init2(){
    $("ul li").click(function(){
        var srtcontent =$(this.text);
        var strDisp=$("")
    
    });
}