/*
    function:期中测试
    author：周一班-郭雷扬
    build-date：2022-4-18

    要求如下：
    1、根据截图“demo1.jpg”完成做题框的布局，结构自定，样式写在style.css下方，素材见images文件夹；
    2、页面加载后，请求data/questions.json文件并将内容显示到做题框中，做题框最开始不可见；
    3、页面加载后，生成一对随机数，并记录下索引值，记录在rndArr数组中；
    4、鼠标移动到卡片上后（mouseover事件），卡片的图像更换，如果卡片的索引值是rndArr数组中的索引值，加载paleNpc-card类，否则加载kidneyNpc-card类；
    5、卡片切换过程中应用了jQuery的淡入淡出的动画组合效果；
    6、鼠标移开卡片后（mouseout事件），如果为kidneyNpc-card类的卡片还原到初始状态，否则保留卡片上的内容，即不用还原卡片初始状态；
    7、当2张随机数索引值对应的卡片都翻出后，过1秒钟后淡入显示做题框；
    8、做题时，单击错误答案没有任何反应，单击正确答案出现答案解析等文字；
    9、做题过程中可随时关闭做题框，如果答案不正确，重新开始翻牌，规则从第2步到第8步；如果答案正确，保留2张翻开的卡片状态，鼠标移动到卡片上无反应。

    提醒：做题过程中需要及时注册或移除事件，需要做些初始化工作。

*/

var rndArr=[0,0];  //保存2个随机索引值

var refAns="";  //正确答案
var userAns="";  //用户选择答案

var flag=0;   //用于判断索引值
function mouse(){
    $(".card").mouseover(changeImage);
    //索引值相同的卡片翻出后进入做题
    $(".do-question").delay(1000).fadeIn();
}

function changeImage(){
    
}



function onCloseClick(){
    $("#close").off("click");
    $(".option input").off("click");
    $(".do-question").hide();
    $("#ans").hide();
    $(".option").html("");
    $("#result").text("");

}

function onInputClick(){
    userAns=$(this).val();
   // console.log(userAns);
}

function compareCorrect(){
    if(userAns==refAns){
        $("#ans").show();
    }
}


function getquestions(){
    $.getJSON("data/questions.json",function(data){
        var str="";
        var obj=data[0];
        $(".content").text(obj.content);
        str+="<ul>";
        str+="<li><input type='radio' value='A' name='option'> A "+obj.optionA;
        str+="<li><input type='radio' value='B' name='option'> B "+obj.optionB;
        str+="<li><input type='radio' value='C' name='option'> C "+obj.optionC;
        str+="<li><input type='radio' value='D' name='option'> D "+obj.optionD;
        str+="<li><input type='radio' value='E' name='option'> E "+obj.optionE;
        str+="<li><input type='radio' value='F' name='option'> F "+obj.optionF;
        str+="</ul>";
        $(".option").append(str);
        refAns=obj.ans;
        $(".option input").click(onInputClick);

      //  $("#ans").hide();
        $("#refAns").text("参考答案："+obj.ans);
        $("#keyConcept").text(obj.keyConcept);
        $("#point").text("知识点："+obj.level);
        $("#level").text("难度：    易");

        rndArr[0]=parseInt(Math.random()*30);
        rndArr[1]=parseInt(Math.random()*30);
        
        $("#close").click(onCloseClick);
    })
}


//页面加载后调用init函数
function init(){
  // $(".do-question").hide();
  getquestions();
  mouseover();
}

init();