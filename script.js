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

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    // 🧠 Remember:
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    $('.arcane-sceptre').click(attackBtnClickedArcaneScepter);
    $('.entangle').click(attackBtnClickedEntangle);
    $('.dragon-blade').click(attackBtnClickedDragonBlade);
    $('.star-fire').click(attackBtnClickedStarFire);

};

//------- events handler functions when attacked btn is 'clicked' -------//
let attackBtnClickedArcaneScepter = function(){
// **Update AP value**
    // 'ap-text' element is a string, used parseInt() converts a string to an integer 
    // It is important to use the parseInt() function in this case because the .text() 
    // function returns the text as a string. 
    // example: if the currentAP value is "50", .text() will return "50" as a string
    // when we try to do arithmetic operations with it, it will reat it as concatenation
    // therefore we need to convert it to an integer using parseInt().
    let currentAP = parseInt($('.ap-text').text());
    let newAP = currentAP - apArcane;
    if (newAP <= 0) {
        newAP = 0;
    
// attack button will be DISABLE once newAP = 0
    } if (newAP <= 0) {
        $('.attack-btn').attr('disabled', true);
    }

//here is where the render state changes in the DOM 
// each time the attack is launched - showing the new AP
    $('.ap-text').text(newAP);
    $('#ap-meter').val(newAP);

//If the Freaky Fungus runs out of HP, 
//the monster is dead and you win! 
//Replace the `walk` class with a `dead` class on the 
//freaky-fungus element, to make them fall over and die.
    if (newAP <= 0) {
        $('.freaky-fungus').removeClass('walk').addClass('jump');
    }

// Update HP value
// again here using parseInt() to convert sting into number and then capturing that with .text() 
    let currentHP = parseInt($('.hp-text').text());
    let newHP = currentHP - hpArcane;
    if (newHP < 0) {
        newHP = 0;
    }

//here is where the render state changes in the DOM 
// each time the attack is launched - showing the new HP
    $('.hp-text').text(newHP);

// stretch-goal**Progress Bar** Updated the value of each `<progress>` element: 
    $('#hp-meter').val(80);

// if newHP is less or than equal to 0 - use 'dynamic' selector wording 
//  along with removeClass() & addClass();
    if (newHP <= 0) {
        $('.freaky-fungus').removeClass('walk').addClass('dead');
    }

// stretch-goal**HP Regeneration** 
//  If the Freaky Fungus' HP falls below 50, 
//  have it regenerate 1 HP every second.
    let regenerate;
        if(newHP <= 50){
        regenerate = setInterval(function() {
        newHP++;
        $('#hp-meter').val(newHP);
        $('.hp-text').text(newHP);
        if (newHP >= 50) {
            clearInterval(regenerate);
        }
     }, 1000);
    }
}

let attackBtnClickedEntangle = function(){

        let currentAP = parseInt($('.ap-text').text());
        let newAP = currentAP - apEntangle;
        if (newAP <= 0) {
            newAP = 0;
        
        } if (newAP <= 0) {
            $('.attack-btn').attr('disabled', true);
        }

        $('.ap-text').text(newAP);
        $('#ap-meter').val(newAP);
    
        if (newAP <= 0) {
            $('.freaky-fungus').removeClass('walk').addClass('jump');
        }

        let currentHP = parseInt($('.hp-text').text());
        let newHP = currentHP - hpEntangle;
        if (newHP < 0) {
            newHP = 0;
        }

        $('.hp-text').text(newHP);    
        $('#hp-meter').val(80);
    
        if (newHP <= 0) {
            $('.freaky-fungus').removeClass('walk').addClass('dead');
        }

        let regenerate;
            if(newHP <= 50){
            regenerate = setInterval(function() {
            newHP++;
            $('#hp-meter').val(newHP);
            $('.hp-text').text(newHP);
            if (newHP >= 50) {
                clearInterval(regenerate);
            }
         }, 1000);
        }
    }

let attackBtnClickedDragonBlade = function(){

        let currentAP = parseInt($('.ap-text').text());
        let newAP = currentAP - apDragonBlade;
        if (newAP <= 0) {
            newAP = 0;
        
        } if (newAP <= 0) {
            $('.attack-btn').attr('disabled', true);
        }

        $('.ap-text').text(newAP);
        $('#ap-meter').val(newAP);
    
        if (newAP <= 0) {
            $('.freaky-fungus').removeClass('walk').addClass('jump');
        }

        let currentHP = parseInt($('.hp-text').text());
        let newHP = currentHP - hpDragonBlade;
        if (newHP < 0) {
            newHP = 0;
        }

        $('.hp-text').text(newHP);    
        $('#hp-meter').val(80);
    
        if (newHP <= 0) {
            $('.freaky-fungus').removeClass('walk').addClass('dead');
        }

        let regenerate;
            if(newHP <= 50){
            regenerate = setInterval(function() {
            newHP++;
            $('#hp-meter').val(newHP);
            $('.hp-text').text(newHP);
            if (newHP >= 50) {
                clearInterval(regenerate);
            }
         }, 1000);
        }
    }

let attackBtnClickedStarFire = function(){

    let currentAP = parseInt($('.ap-text').text());
    let newAP = currentAP - apStarFire;
    if (newAP <= 0) {
        newAP = 0;
    
    } if (newAP <= 0) {
        $('.attack-btn').attr('disabled', true);
    }

    $('.ap-text').text(newAP);
    $('#ap-meter').val(newAP);

    if (newAP <= 0) {
        $('.freaky-fungus').removeClass('walk').addClass('jump');
    }

    let currentHP = parseInt($('.hp-text').text());
    let newHP = currentHP - hpStarFire;
    if (newHP < 0) {
        newHP = 0;
    }

    $('.hp-text').text(newHP);    
    $('#hp-meter').val(80);

    if (newHP <= 0) {
        $('.freaky-fungus').removeClass('walk').addClass('dead');
    }

    let regenerate;
        if(newHP <= 50){
        regenerate = setInterval(function() {
        newHP++;
        $('#hp-meter').val(newHP);
        $('.hp-text').text(newHP);
        if (newHP >= 50) {
            clearInterval(regenerate);
        }
    }, 1000);
    }
}