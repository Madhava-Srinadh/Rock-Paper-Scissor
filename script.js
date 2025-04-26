let choices = document.querySelectorAll(".choices");
let msg = document.querySelector(".msg");
let userscore = 0;
let compscore = 0;
let user = document.querySelector(".user-score");
let comp = document.querySelector(".comp-score");
let arr = ["rock","paper","scissor"];
let comp_choice = ()=>{
    let randidx = Math.floor(Math.random()*3);
    return arr[randidx];
}
function check(userchoice){
    let compchoice = comp_choice(userchoice);
    if(userchoice === compchoice){
        msg.innerText = "Game was Draw";
        msg.style.background = "#5E807F";
    }
    else{
        let win = true;
        if(userchoice === "rock"){
            win = (compchoice==="paper")? false:true;
        }else if(userchoice === "paper"){
            win = (compchoice==="scissor")?false:true;
        }else{
            win = (compchoice==="rock")?false:true;
        }
        if(win) {
            userscore++;
            user.innerText = `your score ${userscore}`;
            msg.innerText =`your ${userchoice} beats ${compchoice}`;
            msg.style.background = "green";
        }else{
            compscore++;
            comp.innerText = `Computer score ${compscore}`;
            msg.innerText =`${compchoice} beats your ${userchoice}`;
            msg.style.background = "red";
        }

    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("id");
        check(userchoice);
    })
});