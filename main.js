
//////// PVP

const bar = document.querySelectorAll(".bar");
const status = document.querySelector("#status");
const moving = document.querySelector("#changesymbol");
const restart = document.querySelector(".fas.fa-undo-alt.fa-2x")
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
            if (playerStatus == 2){
                if(content == 0){
                    each.innerHTML = `${o}`
                    each.classList += " o"
                    playerStatus = 1;
                    maxMoves++
                    moving.innerHTML = "Now moving ... X"
                } else {}
            } else {
                if(content == 0){
                    each.innerHTML = `${x}`
                    each.classList += " x"
                    playerStatus = 2;
                    maxMoves++
                    moving.innerHTML = "Now moving ... O"
                } else {}
            }
            checkwhowon("x");
            checkwhowon("o");
        }
    })
})  

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
    bar.forEach( e => {
        e.innerHTML = ``;
        e.classList = "bar";
    })
    moving.innerHTML = "Now moving ... X";
    status.style.display = "none";
    maxMoves = 0;
    playerStatus = 1;
    winStatus = false;
})