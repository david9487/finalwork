
$(document).ready(function(){
    TweenMax.to(".card2",0, {
        x: 380,
        ease: Linear.easeNone
    });
    TweenMax.to(".card3", 0, {
        x: 380,
        ease: Linear.easeNone
    });
    TweenMax.to(".card4", 0, {
        x: 380,
        ease: Linear.easeNone
    });
    TweenMax.to(".card5", 0, {
        x: 380,
        ease: Linear.easeNone
    });
    TweenMax.to(".progress-bar", 0, {
        width:76,
        ease: Linear.easeNone
    });
    $('.card1 .btn-next').click(function(){
        turnNext(1);

    })
    $('.card2 .btn-next').click(function(){
        turnNext(2);
    })
    $('.card2 .btn-front').click(function(){
        turnPrev(2);
    })
    $('.card3 .btn-next').click(function(){
        turnNext(3);
    })
    $('.card3 .btn-front').click(function(){
        turnPrev(3);
    })
    $('.card4 .btn-next').click(function(){
        turnNext(4);
    })
});
function turnNext(n){
    TweenMax.to(".card"+n,0.5, {
        x: -380,
        ease: Linear.easeNone,
        delay:0.3
    });
        TweenMax.to(".card"+(n+1),0.5, {
        x: 0,
        ease: Linear.easeNone,
        delay:0.3

    });
    TweenMax.to(".progress-bar", 0, {
        width:76*(n+1),
        ease: Linear.easeNone,
        delay:0.3
    });
}

// function turnPrev(n){
//     TweenMax.to(".card"+(n-1),0.5, {
//         x: 0,
//         ease: Linear.easeNone
//     });
//     TweenMax.to(".card"+n,0.5, {
//         x: 500,
//         ease: Linear.easeNone
//     });
//     TweenMax.to(".progress-bar", 0, {
//         width:125*(n-1),
//         ease: Linear.easeNone
//     });
// }

$(document).ready(function()
{
    $(".btn-send").click(function(event) {
        thumbmove();
    });
    $(".btn-time").click(function(event) {
        thumbmove();
    });
    $(".btn-app").click(function(event) {
        thumbmove();
    });
    $(".btn-independent").click(function(event) {
        save();
        thumbmove();
    });
})

   




function save(){
    let postURL="https://script.google.com/macros/s/AKfycbxwXsosHusOT4EUbo6TJjYZIYFRXagSVUCjquWs/exec";
    let param= new Object();
    param.method="write";
    param.userName=$("input[name='userName']").val();
    param.contentTxt=$("textarea[name='contentTxt']").val();
    param.gender=$("input[name='gender']:checked").val();
    param.time=$("input[name='time']:checked").val();
    param.app=$("input[name='app']:checked").val();
    param.degree=$("input[name='degree']:checked").val();
    param.sheetUrl="https://docs.google.com/spreadsheets/d/1V2_u6Xx0pNh_gKT-n65XhxkF381W0Tcbo-eFoecy7yM/edit?usp=sharing";
    param.sheetTag="基本資料";
    console.log(param);
    $.post(postURL,param, function(data) {
        console.log(data);
        // if(data.result=="success"){
        // alert("成功寫入");
        // read();
        // }else{
        //     alert("失敗");
        // }
    });
}


function thumbmove(){
    TweenMax.to('.thumb',0,{delay:0.3,rotation:-50, transformOrigin: "300px 400px",ease: Linear.easeNone});
    TweenMax.to('.thumb',0,{delay:0.6,rotation:0, transformOrigin: "300px 400px",ease: Linear.easeNone});
}