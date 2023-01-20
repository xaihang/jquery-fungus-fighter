$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!

//------- _state_ -------//

let freakyFungusHP = 100;

//      Arcane Scepter
const apArcane = 12; 
const hpArcane = 14;

//      Entangle
const apEntangle = 23; 
const hpEntangle = 9;

//      Dragon Blade
const apDragonBlade = 38; 
const hpDragonBlade = 47;

//      Star Fire
const apStarFire = 33; 
const hpStarFire = 25;


function onReady() {
    // render(); 

    

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember:
    // - Handle events that ->
    $('.arcane-sceptre').click(attackBtnClickedArcaneScepter);
    $('.entangle').click(attackBtnClickedEntangle);
    $('.dragon-blade').click(attackBtnClickedDragonBlade);
    $('.star-fire').click(attackBtnClickedStarFire);

    // - Updates state which is ->


    // - Rendered to the DOM
};


let attackBtnClickedArcaneScepter = function(){
    // Update AP value
    let currentAP = parseInt($('.ap-text').text());
    let newAP = currentAP - apArcane;
    if (newAP < 0) {
        newAP = 0;
    }
    $('.ap-text').text(newAP);
    $('#ap-meter').val(newAP);

    // Update HP value
    let currentHP = parseInt($('.hp-text').text());
    let newHP = currentHP - hpArcane;
    if (newHP < 0) {
        newHP = 0;
    }
    $('.hp-text').text(newHP);
    $('#hp-meter').val(newHP);
}

let attackBtnClickedEntangle = function(){
    // Update AP value
    let currentAP = parseInt($('.ap-text').text());
    let newAP = currentAP - apEntangle;
    if (newAP < 0) {
        newAP = 0;
    }
    $('.ap-text').text(newAP);
    $('#ap-meter').val(newAP);

    // Update HP value
    let currentHP = parseInt($('.hp-text').text());
    let newHP = currentHP - hpEntangle;
    if (newHP < 0) {
        newHP = 0;
    }
    $('.hp-text').text(newHP);
    $('#hp-meter').val(newHP);
}

let attackBtnClickedDragonBlade = function(){
    // Update AP value
    let currentAP = parseInt($('.ap-text').text());
    let newAP = currentAP - apDragonBlade;
    if (newAP < 0) {
        newAP = 0;
    }
    $('.ap-text').text(newAP);
    $('#ap-meter').val(newAP);

    // Update HP value
    let currentHP = parseInt($('.hp-text').text());
    let newHP = currentHP - hpDragonBlade;
    if (newHP < 0) {
        newHP = 0;
    }
    $('.hp-text').text(newHP);
    $('#hp-meter').val(newHP);
}

let attackBtnClickedStarFire = function(){
    // Update AP value
    let currentAP = parseInt($('.ap-text').text());
    let newAP = currentAP - apStarFire;
    if (newAP < 0) {
        newAP = 0;
    }
    $('.ap-text').text(newAP);
    $('#ap-meter').val(newAP);

    // Update HP value
    let currentHP = parseInt($('.hp-text').text());
    let newHP = currentHP - hpStarFire;
    if (newHP < 0) {
        newHP = 0;
    }
    $('.hp-text').text(newHP);
    $('#hp-meter').val(newHP);
}