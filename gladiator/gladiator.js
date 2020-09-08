
function logger() {
    console.log($('#glad_1_name').val())
}

$('input[name*="glad_2_name"]').val()

start_button.addEventListener("click", logger)



const taunt = ["Is that all you've got?", "I have the high ground!", "Don't try it!", "Aaaghgrh", "Time to die!", "Stop right there criminal scum!", "Why won't you die?", "Hey wait, let's talk about this", "Ahhh, General Kenobi!"]

function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
}

class Gladiator {
    constructor(options) {
        this.name = options.name;
        this.health = 100;
    }

    attack(opponent) {
        var damage = rand(3, 13);
        opponent.health -= damage;
        $("#combat_logs").append(`${this.name} hits ${opponent.name} for ${damage} damage.`);
        $("#combat_logs").append("<br/>");
    }

    heal() {
        var healing = rand(3, 13);
        this.health += healing;
        $("#combat_logs").append(`${this.name} heals themselves for ${healing} health.`);
        $("#combat_logs").append("<br/>");
    }

    taunt() {
        var taunt_random = taunt[rand(0, 8)]
        $("#combat_logs").append(`${this.name} says: ${taunt_random}`);
        $("#combat_logs").append("<br/>");
    }
}



function fightToTheDeath(gladOne, gladTwo) {
    var fightRounds = 0;
    var gladOneHealTicker = 0;
    var gladTwoHealTicker = 0;
    while (gladOne.health > 0 && gladTwo.health > 0) {
        var attackChoice = Math.round(Math.random());
        if (attackChoice == 1) {
            gladOne.attack(gladTwo);
            var gladTwoHealTicker = 0;
            var gladOneHealTicker = gladOneHealTicker + 1;
        }
        else {
            gladTwo.attack(gladOne);
            var gladOneHealTicker = 0;
            var gladTwoHealTicker = gladTwoHealTicker + 1;
        }
        if (gladOneHealTicker == 2) {
            gladOne.heal();
            gladTwo.taunt();
            $("#combat_logs").append(`${gladOne.name} has ${gladOne.health} health remaining.`);
            $("#combat_logs").append("<br/>");
            $("#combat_logs").append(`${gladTwo.name} has ${gladTwo.health} health remaining.`);
            $("#combat_logs").append("<br/>");
        }
        if (gladTwoHealTicker == 2) {
            gladTwo.heal();
            gladOne.taunt();
            $("#combat_logs").append(`${gladTwo.name} has ${gladTwo.health} health remaining.`);
            $("#combat_logs").append("<br/>");
            $("#combat_logs").append(`${gladOne.name} has ${gladOne.health} health remaining.`);
            $("#combat_logs").append("<br/>");
        }
        var fightRounds = fightRounds + 1;
    }
    if (gladOne.health > 0) {
        $("#combat_logs").append(`${gladTwo.name}: Oh the humanity! <br/>`)
        $("#combat_logs").append(`${gladOne.name} is the winner! He won in ${fightRounds} rounds of battle. He has ${gladOne.health} health points remaining.`);
    }
    else if (gladTwo.health > 0) {
        $("#combat_logs").append(`${gladOne.name}: *muffled dying noises* <br/>`)
        $("#combat_logs").append(`${gladTwo.name} is the winner! He won in ${fightRounds} rounds of battle. He has ${gladTwo.health} health points remaining.`);
    }
    else {
        $("#combat_logs").append(`Something has gone wrong - ${gladOne.name} has ${gladOne.health} health points remaining, ${gladTwo.name} has ${gladTwo.health} health points remaining`)
    }
}



start_button.addEventListener("click", combat_start)

function combat_start() {
    console.log("combat start")
    $("#combat_logs").empty();
    let gladOne = new Gladiator({ name: `${$('#glad_1_name').val()}` });
    let gladTwo = new Gladiator({ name: `${$('#glad_2_name').val()}` }); if ($('#glad_1_name').val() == "" || $('#glad_2_name').val() == "") {
        alert("Please input names for the gladiators")
    }
    else { fightToTheDeath(gladOne, gladTwo) }
}






