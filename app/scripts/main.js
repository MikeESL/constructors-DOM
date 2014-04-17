
$(document).ready(function() {
	
	$(".FighterOne").click(function(e) {
		e.preventDefault();
		clint.weapon.fire(harry);
		console.log ("harry has " + harry.life + " points of life left");
		$(".FighterOneResult").append("harry has " + harry.life + " points of life left" );
});		
	$(".FighterTwo").click(function(e) {
		e.preventDefault();
		harry.weapon.fire(clint);
		console.log ("clint has " + clint.life + " points of life left");
		$(".FighterTwoResult").append("clint has " + clint.life + " points of life left" );
		
	});
	

});


function FighterOne (name, weapon){
		this.name = name;
		this.weapon = weapon;
		//this.weapon={
			//typeWeapon: typeWeapon,
				//damage: 
									//}
		this.life = 100;
	//	this.fire = function(FighterTwo)
		this.addDamage = function (weapon){
				this.life = this.life - weapon.damage;
				if (this.life <= 0){
				alert (this.name + " died. Game Over");
				
				}
				
};
}


function FighterTwo (name, weapon){
		this.name = name;
		this.weapon = weapon;
		this.life = 100;
		this.addDamage = function(weapon){
				this.life = this.life - weapon.damage;
				if (this.life <= 0){
				alert (this.name + " died. Game Over");
				
		}
		
};
}
function Weapon (type, damage){
		this.type = type || "fist";
		this.damage = damage || 5;
		this.fire = function (target){
			target.addDamage(this);

		}
};
var crowbar = new Weapon ("crowbar", 20);
var knife = new Weapon ("knife", 40);
var gun = new Weapon ("gun", 60);
var bazooka = new Weapon ("bazooka", 100);
var clint = new FighterOne("clint", crowbar);
var harry = new FighterTwo("harry", gun);
var mike = new FighterOne ("mike");

// another try at this:
// function FighterOne (name){
// 		this.name = name;
// 		this.life = 100;
// 		this.addDamage = function (weapon){
// 				if (this.life <= 0){
// 					alert (this.name + "died. Game Over");
// 				}
// 				this.life = this.life - weapon.damage;
// };
// }

// function FighterTwo (name){
// 		this.name = name;
// 		this.life = 100;
// 		this.addDamage = function(weapon){
// 				if (this.life <= 0){
// 		}
// 		this.life = this.life - weapon.damage;
// };
// }
// function Weapon (type, damage){
// 		this.type = type || "fist";
// 		this.damage = damage || 5;
// 		this.fire = function (target){
// 			target.addDamage(this);

// 		}
// };
// var crowbar = new Weapon ("crowbar", 20);
// var knife = new Weapon ("knife", 40);
// var gun = new Weapon ("gun", 60);
// var bazooka = new Weapon ("bazzoka", 100);
// var clint = new FighterOne("clint");
// var harry = new FighterTwo("harry");

//});

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
// function Wizard (name, spell) {
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















