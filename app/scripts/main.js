console.log('\'Allo \'Allo!');
$ (document).ready (function(){

// start with 'get started' button, later

//constructors, to kick this off
function FighterOne (name, weapon){
		this.name = name;
		this.life = 100;
		this.addDamage = function (weapon){
				if (this.life <= 0){
					alert (this.name + "died. Game Over");
				}
				this.life = this.life - weapon.damge;
};
}

function FighterTwo (name, weapon){
		this.name = name;
		this.life = 100;
		this.addDamage = function(weapon){
				if (this.life <= 0)
		}
}
function Weapon (type, damage){
		this.type = type || "fist";
		this.damage = damage || 5;
		this.fire = function (target){
			target.addDamage(this);

		}
};






























































//attempt to get 3 constructors intetacting. Abandoned for now
// function Monster (name, weapon) {
// 		this.name = name;
// 		this.isMonster = true;
// 		this.isHuman = false;
// 		this.isAlive = true;
// 		this.bite = function(Vampire) {
// 					Vampire.isAlive = false;

// 		};
// }

// function Vampire (name) {
// 		this.name = name;
// 		this.isVampire = true;
// 		this.isHuman = false;
// 		this.isAlive = true;
// 		this.bite = function(Monster){
// 					Monster.isAlive = false; 

// };
// }
// ,
// function Weapon (name, spell) {
// 	this.name = name;
// 	this.isWizard = true;
// 	this.spellOne = function(Monster){
// 			Monster.isHuman = true;
// };
// 	this.spellTwo = function(Vampire)
// 			Monster.isHuman = true;}
// }


// var franky = new Monster("Franky");
// var dracula = new Vampire("Dracula");
// var merlin = new Wizard ("Merlin");








// // $("form").submit(function(event) {
// //   		if ($("input:first" ).val() === "jquery") {
// //     $(".display").text("Validated!").show();
// //     alert("Thank you for typing correctly");
// //     return;
// //   }
 
  
// //   $(".display").text("Incorrect, genius!").show().fadeOut(5000);
// //   alert("No Way!");
// //   event.preventDefault();
// // });















});