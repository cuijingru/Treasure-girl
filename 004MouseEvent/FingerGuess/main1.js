var r,score=3,grade=1,LastHumanChoice,humanChoice;
var LastWinner="no one",LastComputerChoice="rock";
function rock() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/rock.png\"/>";
    humanChoice = "rock";
    judge("rock");
    LastHumanChoice="rock";
}
function scissors() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/scissors.png\"/>";
    humanChoice="scissors";
    judge("scissors");
    LastHumanChoice="scissors";
}
function paper() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/paper.png\"/>";
    humanChoice="paper";
    judge("paper");
    LastHumanChoice="paper";
}

function judge(myChoice) {
    r = 3 * Math.random();
    var computerResult;
    if(grade===1){
        computerResult = onlyRocker();
    }
    else if(grade===2){
        computerResult = LearnFromHuman();
    }
    else if(grade===3){
        computerResult = winnerAgain();
        LastComputerChoice = computerResult;
    }
    else if(grade===4){
        computerResult=loseChange();
        LastComputerChoice=computerResult;
    }
    else if(grade===5){
        computerResult=lovePaper();
    }
    else if(grade===6){
        computerResult=randomPlayer();
    }
    else if(grade===7){
        computerResult=cheatingMan(humanChoice);
    }

    if (myChoice==="rock") {
        if (computerResult==="rock"){
            LastWinner="no one";
        }

        else if(computerResult==="scissors"){
            LastWinner="human";
            score+=1;
        }
        else if(computerResult==="paper"){
            LastWinner="com";
            score-=1;
        }
    }
    else if (myChoice==="scissors"){
        if (computerResult==="rock"){
            score-=1;
            LastWinner="com";
        }
        else if(computerResult==="scissors"){
            LastWinner="no one";

        }
        else if(computerResult==="paper"){
            score+=1;
            LastWinner="human";
        }
    }else{
        if (computerResult==="rock"){
            LastWinner="human";
            score+=1;
        }
        else if(computerResult==="scissors"){
            LastWinner="com";
            score-=1;
        }
        else if(computerResult==="paper"){
            LastWinner="no one";

        }

    }
    if (score>=5) {
        score=0;
        grade+=1;
    }
    document.getElementById("result").innerHTML="第"+grade+"关，积分："+score;
    if (grade>7) {
        document.getElementById("result").innerHTML="666，恭喜豆豆通关了</br>截图联系静宝可领取七夕奖励哦"+score;
    }
}
function go() {
}
function computerChoice() {
    r = Math.random()*3;
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

function onlyRocker() {
    document.getElementById("computerName").innerHTML= "电脑大锤哥" ;
    document.getElementById("computerChoice").innerHTML= "<img src='images/rock.png'>" ;
    return"rock";
}
function LearnFromHuman() {
    document.getElementById("computerName").innerHTML= "模仿帝" ;
    document.getElementById("computerChoice").innerHTML= "<img src='images/"+LastHumanChoice+".png'>" ;
    return LastHumanChoice;
}
function winnerAgain() {
    document.getElementById("computerName").innerHTML= "傲娇先生" ;
    if (LastWinner==="com") {
        document.getElementById("computerChoice").innerHTML= "<img src='images/"+LastComputerChoice+".png'>";
        return LastComputerChoice;
    }
    var temp=computerChoice();
    document.getElementById("computerChoice").innerHTML= "<img src='images/"+temp+".png'>" ;
    return temp;
}
function loseChange() {
    document.getElementById("computerName").innerHTML= "输不起小姐" ;
    if (LastWinner==="human") {
        var temp = getResultExclude(LastComputerChoice);
        document.getElementById("computerChoice").innerHTML= "<img src='images/"+temp+".png'>";
        return temp;
    }
    temp=computerChoice();
    document.getElementById("computerChoice").innerHTML= "<img src='images/"+temp+".png'>" ;
    return temp;
}
function getResultExclude(exclusion) {
    var temp = computerChoice();
    if (temp===exclusion) {
        return getResultExclude(exclusion);
    }
    else{
        return temp;
    }
}
function lovePaper() {
    r = Math.random()*3;
    var temp;
    if (r<0.8){
        document.getElementById("computerChoice").innerHTML= "<img src='images/rock.png'>" ;
        temp = "rock";
    }
    else if (r<1.8){
        document.getElementById("computerChoice").innerHTML= "<img src='images/scissors.png'>" ;
        temp ="scissors";
    }
    else{
        document.getElementById("computerChoice").innerHTML= "<img src='images/paper.png'>" ;
        temp ="paper";
    }
    document.getElementById("computerName").innerHTML= "爱布大白熊" ;
    document.getElementById("computerChoice").innerHTML= "<img src='images/"+temp+".png'>" ;
    return temp;

}
function randomPlayer() {
    r = Math.random()*3;
    var temp;
    if (r<1){
        document.getElementById("computerChoice").innerHTML= "<img src='images/rock.png'>" ;
        temp = "rock";
    }
    else if (r<2.5){
        document.getElementById("computerChoice").innerHTML= "<img src='images/scissors.png'>" ;
        temp ="scissors";
    }
    else{
        document.getElementById("computerChoice").innerHTML= "<img src='images/paper.png'>" ;
        temp ="paper";
    }
    document.getElementById("computerName").innerHTML= "随心所欲便便虾" ;
    document.getElementById("computerChoice").innerHTML= "<img src='images/"+temp+".png'>" ;
    return temp;

}
function cheatingMan(humanChoice) {
    document.getElementById("computerName").innerHTML= "作弊爷爷" ;
    if (humanChoice==="rock") {
        r = Math.random();
        if (r<0.3) {
        document.getElementById("computerChoice").innerHTML= "<img src='images/paper.png'>" ;
        return "paper";
        }
        else{
            return computerChoice();
        }
    }
    else if (humanChoice==="scissors") {
        r = Math.random();
        if (r<0.3) {
            document.getElementById("computerChoice").innerHTML= "<img src='images/rock.png'>" ;
            return "rock";
        }
        else{
            return computerChoice();
        }
    }
    else{
        r = Math.random();
        if (r<0.3) {
            document.getElementById("computerChoice").innerHTML= "<img src='images/scissors.png'>" ;
            return"scissors"
        }
        else{
            return computerChoice();
        }
    }
}
