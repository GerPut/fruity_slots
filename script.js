
//Variables

var startGame = false;
var spin = [];
let status = document.getElementById("status")
let handleBall = document.querySelector('.handle-bar-ball')
var money = 5000;


//Functions

function updateMoney(money) {
    let bankRoll = document.querySelector('.bankroll')
    bankRoll.innerHTML = "$" + money

}

function pullHandle() {
    handleBall.classList.toggle('movedown')
    if (startGame) { return null; }
    startGame = true;
    var numChanges = randomInt(1, 4) * 10
    var numberSlot1 = numChanges + randomInt(1, 10)
    var numberSlot2 = numChanges + 2 * 10 + randomInt(1, 10)
    var numberSlot3 = numChanges + 4 * 10 + randomInt(1, 10)

    var i1 = 0;
    var i2 = 0;
    var i3 = 0;

    status.innerHTML = "SPINNING..."
    slot1 = setInterval(spin1, 25);
    slot2 = setInterval(spin2, 30);
    slot3 = setInterval(spin3, 35);


    function spin1() {
        i1++;
        if (i1 >= numberSlot1) {
            clearInterval(slot1);
            return null;
        }
        slotTile = document.getElementById("slot1");
        if (slotTile.className == "a10") {
            slotTile.className = "a0";
        }
        slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
    }
    function spin2() {
        i2++;
        if (i2 >= numberSlot2) {
            clearInterval(slot2);
            return null;
        }
        slotTile = document.getElementById("slot2");
        if (slotTile.className == "a10") {
            slotTile.className = "a0";
        }
        slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
    }
    function spin3() {
        i3++;
        if (i3 >= numberSlot3) {
            clearInterval(slot3);
            testWin();
            return null;
        }
        slotTile = document.getElementById("slot3");
        if (slotTile.className == "a10") {
            slotTile.className = "a0";
        }

        slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
    }
}


function testWin() {
    var slot1 = document.getElementById("slot1").className
    var slot2 = document.getElementById("slot2").className
    var slot3 = document.getElementById("slot3").className

    if (slot1 == "a1" && slot2 == "a1" && slot3 == "a1") {
        status.innerHTML = "You Win!"
        money += 2000;



    } else if (slot1 == "a5" && slot2 == "a5" && slot3 == "a5") {
        status.innerHTML = "You Win!"
        money += 1000;



    } else if (slot1 == "a3" && slot2 == "a3" && slot3 == "a3") {
        status.innerHTML = "You Win!"
        money += 500;



    } else if (slot1 == slot2 || slot1 == slot3 || slot2 == slot3) {
        status.innerHTML = "You Win!"
        money += 50;



    } else {
        status.innerHTML = "YOU LOSE!"
        money -= 50;


    }
    updateMoney(money)
    handleBall.classList.remove('movedown')
    startGame = false;
}

function randomInt(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
