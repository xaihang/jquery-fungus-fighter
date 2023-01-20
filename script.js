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

    const attackBtnArcane = $('.attack-btn, .arcane-sceptre').click(function() {
        console.log('i have been clicked!');
        let currentAP = $('#ap-meter').val();
        let currentHP = $('#hp-meter').val();
      console.log('i have been clicked!');
       // Reduce AP by 12 and HP by 14
       currentAP -= 12;
       currentHP -= 14;
       console.log('currentAP', currentAP);
       console.log('currentHP', currentHP);
      
      //  // Update the AP meter and HP meter
      //  $('#ap-meter').val(currentAP);
      //  $('#hp-meter').val(currentHP);
      
      //  // Update the AP text and HP text
      //  $('.ap-text').text(currentAP + ' AP');
      //  $('.hp-text').text(currentHP + ' HP');
      
    
      }); 
      


    
    // - Updates state which is ->


    // - Rendered to the DOM
}

// const attackBtnArcaneSceptre =
// $('.attack-btn, .arcane-sceptre').click(function() {
//   let currentAP = $('#ap-meter').val();
//   let currentHP = $('#hp-meter').val();
// console.log('i have been clicked!');
//  // Reduce AP by 12 and HP by 14
// //  currentAP -= 12;
// //  currentHP -= 14;

// //  // Update the AP meter and HP meter
// //  $('#ap-meter').val(currentAP);
// //  $('#hp-meter').val(currentHP);

// //  // Update the AP text and HP text
// //  $('.ap-text').text(currentAP + ' AP');
// //  $('.hp-text').text(currentHP + ' HP');


// }); 
