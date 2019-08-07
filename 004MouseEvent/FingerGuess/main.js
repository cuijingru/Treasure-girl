var r,score=4,grade=1;
function rock() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/rock.png\"/>";

    judge("rock");
    /* if (computerResult=="rock"){
         document.getElementById("result").innerHTML="draw";
     }
     else if(computerResult=="scissors"){
         document.getElementById("result").innerHTML="win";
     }
     else if(computerResult=="paper"){
             document.getElementById("result").innerHTML="lose";
         }*/
}
function scissors() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/scissors.png\"/>";

    judge("scissors");
    // if (computerResult=="rock"){
    //     document.getElementById("result").innerHTML="lose";
    // }
    // else if(computerResult=="scissors"){
    //     document.getElementById("result").innerHTML="draw";
    // }
    // else if(computerResult=="paper"){
    //     document.getElementById("result").innerHTML="win";
    // }
}
function paper() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/paper.png\"/>";

    judge("paper");
    /* if (computerResult=="rock"){
         document.getElementById("result").innerHTML="win";
     }
     else if(computerResult=="scissors"){
         document.getElementById("result").innerHTML="lose";
     }
     else if(computerResult=="paper"){
         document.getElementById("result").innerHTML="draw";
     }*/
}
function judge(myChoice) {
    r = 3 * Math.random();
    var computerResult=computerChoice();
    if (myChoice=="rock") {
        if (computerResult=="rock"){
            ;
        }

        else if(computerResult=="scissors"){
            score+=1;
        }
        else if(computerResult=="paper"){
            score-=1;
        }
    }
    else if (myChoice=="scissors"){
        if (computerResult=="rock"){
            score-=1;
        }
        else if(computerResult=="scissors"){
            ;

        }
        else if(computerResult=="paper"){
            score+=1;
        }
    }else{
        if (computerResult=="rock"){
            score+=1;
        }
        else if(computerResult=="scissors"){
            score-=1;
        }
        else if(computerResult=="paper"){
            ;

        }

    }
    if (score>=5) {
        score=0;
        grade+=1;
    }
    document.getElementById("result").innerHTML="第"+grade+"关，积分："+score;
    if (grade>=10) {
        document.getElementById("result").innerHTML="666，恭喜豆豆通关了</br>截图联系静宝可领取七夕奖励哦"+score;
    }
}
function go() {
}
function computerChoice() {
    if (r<1){
        document.getElementById("computerChoice").innerHTML= "<img src='images/rock.png'>" ;
        return"rock";
    }
    else if (r<2){
        document.getElementById("computerChoice").innerHTML= "<img src='images/scissors.png'>" ;
        return"scissors";
    }
    else{
        document.getElementById("computerChoice").innerHTML= "<img src='images/paper.png'>" ;
        return"paper";
    }

}
