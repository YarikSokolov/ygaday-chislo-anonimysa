// console.log(10);
// console.log("history, literature");
// let bubblekvs="game"
// console.log(bubblekvs);
// let CAR="BMW"
// let name="maxim"
// console.log(name+" loves "+CAR);
let okButton = document.getElementById("okButton")
let playerInput = document.getElementById("imput")
let secretNumber = Math.floor(Math.random() * 10)
let newgame = document.getElementById("newgame")
// secretNumber=1
let zagolovok = document.getElementById("h1")
let zagolovokHP = document.getElementById("h2")
let HP = 3
console.log(zagolovok);
okButton.onclick = function () {
    if (playerInput.value == secretNumber) {
        zagolovok.innerHTML = "ты скачал(а) бабл квас!!!!!!!!!!"
        okButton.disabled=true
    }
    else {
        HP = HP - 1
        zagolovok.innerHTML = "твой бабл квас удалился!!!!!!!!!!!"
        zagolovokHP.innerHTML = "жизни: " + HP
        if (playerInput.value > secretNumber) {
        
           zagolovok.innerHTML="АНАНИМУС ЗАГАДАЛ ЧИСЛО поменьше"
        }
        if (playerInput.value < secretNumber) {
            
            zagolovok.innerHTML="ананимус загадал число ПОБОЛЬШЕ!!!"
        }
        if (HP == 0) {
            
    
            okButton.disabled=true
            
            zagolovok.innerHTML="тот чел умер из-за тебя.анонимное число было #"+secretNumber
        }
        if(HP==1){
            
            zagolovokHP.innerHTML="ЖИЗНИ: "+HP+" скоро он будет рабом"
        }
    }
}
newgame.onclick = function () {

zagolovok.innerHTML="ПОВТОРЯЮ УГАДАЙ ЧИСЛО!"
okButton.disabled=false
    h2.innerHTML="ЖИЗНИ:3"
    HP=3
    secretNumber = Math.floor(Math.random() * 10)
}