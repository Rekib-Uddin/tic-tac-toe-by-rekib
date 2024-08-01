let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-button");
let newbtn=document.querySelector("#newgame-button");
let msgcontainer=document.querySelector(".win-container");
let msg=document.querySelector("#msg");

let turnO=true;//player1 and 2


const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
];

const resetgame=()=>{
    turnO=true;
    enableBtns();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        // console.log("box was clciked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();

    })
})

const disableBtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const enableBtns=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
        msg.innerText=(`congrats,winner is ${winner}` );
        msgcontainer.classList.remove("hide");
}

const checkWinner=()=>{
    for ( let pattern of winpatterns){

            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;            
            let pos3val=boxes[pattern[2]].innerText;

           if(pos1val!=""  &&  pos2val!=""  &&  pos3val!=""){
            if(pos1val===pos2val&& pos2val===pos3val){
                console.log("winner",pos1val)
                disableBtns();
                showWinner(pos1val);//callinng winner func
            }
           }

            
        }
    
}

newbtn.addEventListener("click",resetgame);
 resetbtn.addEventListener("click",resetgame);