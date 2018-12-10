////////Computer moves
function computerMove(e,which){
    
    let toDelete = e.target.id;
    if (barArray.length > 1){
        for (let i = 0; i < barArray.length; i++) {
            let div = barArray[i];
        
            if (div.id == toDelete) {
                barArray.splice(i, 1);
                i++;
            }
        }
        let addCompChoice = Math.floor(Math.random() * barArray.length)

        compReady = false;
        moving.innerHTML = "Computer is moving ..."
        setTimeout(function(){
            barArray[addCompChoice].innerHTML = `${which}`

            if (playerStatus == 2) {
                barArray[addCompChoice].classList += " x"
                moving.innerHTML = "Now moving ... O"
            } else {
                barArray[addCompChoice].classList += " o"
                moving.innerHTML = "Now moving ... X"
            }
            barArray.splice(addCompChoice, 1);
            maxMoves++
            checkwhowon("x");
            checkwhowon("o");
            compReady = true;
        }, 500); 
    }
}
////////// change PVP to PVC
const pvx = document.querySelector("#changeopp");

pvx.addEventListener("click", function(e){
    if (pvx.classList.contains("PvP")) {
        pvx.classList = "PvC";
        pvx.innerHTML = `PvC`
    } else {
        pvx.classList = "PvP";
        pvx.innerHTML = `PvP`
    }
    changingStartComp = 1;
    res(e);
})
//////// GAME

const bar = document.querySelectorAll(".bar");

let barArray = Array.from(bar);

const status = document.querySelector("#status");
const moving = document.querySelector("#changesymbol");
const restart = document.querySelector(".fas.fa-undo-alt.fa-2x")
let compReady = true;
let maxMoves = 0;
let playerStatus = 1;
let winStatus = false;
const o = '<i class="far fa-circle fa-5x"></i>'
const x = '<i class="fas fa-times fa-6x"></i>'

bar.forEach( each => {
    
    each.addEventListener("click",function(e){
        let content = each.innerHTML.length
        if (winStatus == true){
        }
        else {
            if (playerStatus == 2 && compReady == true){
                if (content == 0){
                    each.innerHTML = `${o}`
                    each.classList += " o"
                    playerStatus = 1;
                    maxMoves++
                    moving.innerHTML = "Now moving ... X"

                    if (pvx.classList.contains("PvC")){
                        playerStatus = 2;
                        computerMove(e,x);
                    }
                } else {}
            } else if (playerStatus == 1 && compReady == true) {
                if(content == 0){
                    each.innerHTML = `${x}`
                    each.classList += " x"
                    playerStatus = 2;
                    maxMoves++
                    moving.innerHTML = "Now moving ... O"

                    if (pvx.classList.contains("PvC")){
                        playerStatus = 1;
                        computerMove(e,o);
                    }
                } else {}
            }
            checkwhowon("x");
            checkwhowon("o");
        }
    })
})  
////////CHECK WIN
function checkwhowon(e){
    if(bar[0].classList.contains(e)
    && bar[1].classList.contains(e)
    && bar[2].classList.contains(e) || 
    bar[3].classList.contains(e)
    && bar[4].classList.contains(e)
    && bar[5].classList.contains(e) || 
    bar[6].classList.contains(e)
    && bar[7].classList.contains(e)
    && bar[8].classList.contains(e) || 
    bar[0].classList.contains(e)
    && bar[3].classList.contains(e)
    && bar[6].classList.contains(e) || 
    bar[1].classList.contains(e)
    && bar[4].classList.contains(e)
    && bar[7].classList.contains(e) || 
    bar[2].classList.contains(e)
    && bar[5].classList.contains(e)
    && bar[8].classList.contains(e) || 
    bar[0].classList.contains(e)
    && bar[4].classList.contains(e)
    && bar[8].classList.contains(e) || 
    bar[2].classList.contains(e)
    && bar[4].classList.contains(e)
    && bar[6].classList.contains(e)
    ){
        winStatus = true;
        status.innerHTML = `Wygrał: ${e}`
        status.style.display = "block";
        moving.innerHTML = "..."
    } else if (maxMoves == 9 && winStatus == false){
        status.innerHTML = `Remis`
        status.style.display = "block";
        moving.innerHTML = "..."
    }
};


restart.addEventListener("click", function(e){
    res(e);
})

////////Restart FUNCTION
let changingStart = 0;
let changingStartComp = 0;
function res(e){
    bar.forEach( e => {
        e.innerHTML = ``;
        e.classList = "bar";
    })

    barArray = Array.from(bar);

    status.style.display = "none";
    maxMoves = 0;
    winStatus = false;
    if (pvx.classList.contains("PvP")){
        if(changingStart == 0) {
            playerStatus = 2;
            changingStart = 1;
            moving.innerHTML = "Now moving ... O";
        } else {
            playerStatus = 1;
            changingStart = 0;
            moving.innerHTML = "Now moving ... X";
        }
    } else {
        if(changingStartComp == 0) {

            moving.innerHTML = "Now moving ... O"
            let addCompChoice = Math.floor(Math.random() * barArray.length)
            barArray[addCompChoice].innerHTML = `${x}`
            barArray[addCompChoice].classList += " x"
            barArray.splice(addCompChoice, 1);
            maxMoves++
            changingStartComp = 1;
            playerStatus = 2;
        } else {
            playerStatus = 1;
            changingStartComp = 0;
            moving.innerHTML = "Now moving ... X"
        }
    }

}