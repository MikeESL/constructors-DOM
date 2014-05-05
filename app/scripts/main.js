$(document).ready(function() {

	$(".FighterOne").click(function(e) {
		e.preventDefault();
		clint.weapon.fire(harry);
		//console.log ("harry has " + harry.life + " points of life left");
		$(".FighterOneResult").append(" Harry has " + harry.life + " points of life left. " );

});		
	$(".FighterTwo").click(function(e) {
		e.preventDefault();
		harry.weapon.fire(clint);
		//console.log ("clint has " + clint.life + " points of life left");
		$(".FighterTwoResult").append(" Clint has " + clint.life + " points of life left. " );

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
				//alert (this.name + " died. Game Over");
				$(".FighterTwoResultImg").append("<img src=\"images/dirtyharry.png\">");

				}

};
}

FighterOne.prototype.addDamage = function($el, weapon) {
		  var damagePath = $(".FighterTwoResultImg").val();
		  var endDamage = damagePath + "<img src=\"images/dirtyharry.png\">";
			$el.append(endDamage);
		};


function FighterTwo (name, weapon){
		this.name = name;
		this.weapon = weapon;
		this.life = 100;
		this.addDamage = function(weapon){
				this.life = this.life - weapon.damage;
				if (this.life <= 0){
				//alert (this.name + " died. Game Over");
				$(".FighterOneResultImg").append("<img src=\"images/dirtyharry.png\">");

		}

};
}

// FighterTwo.prototype.addDamage = function($el, weapon) {
// 	  var damagePath = $(".FighterOneResultImg").val();
// 	  var endDamage = damagePath + "<img src=\"images/dirtyharry.png\">";
// 		$el.append(endDamage);
// };


function Weapon (type, damage){
		this.type = type || "nothing";
		this.damage = damage || 1;
		this.fire = function (target){
			target.addDamage(this);

		}
};
var fist = new Weapon ("fist", 10);
var knife = new Weapon ("knife", 40);
var gun = new Weapon ("gun", 50);
var bazooka = new Weapon ("bazooka", 100);
var clint = new FighterOne("clint", fist);
var harry = new FighterTwo("harry", gun);
var mike = new FighterOne ("mike");




//---------------------------------------------------------

// //attempt to get 3 constructors intetacting. Abandoned for now
// // function Monster (name, weapon) {
// // 		this.name = name;
// // 		this.isMonster = true;
// // 		this.isHuman = false;
// // 		this.isAlive = true;
// // 		this.bite = function(Vampire) {
// // 					Vampire.isAlive = false;

// // 		};
// // }

// // function Vampire (name) {
// // 		this.name = name;
// // 		this.isVampire = true;
// // 		this.isHuman = false;
// // 		this.isAlive = true;
// // 		this.bite = function(Monster){
// // 					Monster.isAlive = false; 

// // };
// // }
// // ,
// // function Wizard (name, spell) {
// // 	this.name = name;
// // 	this.isWizard = true;
// // 	this.spellOne = function(Monster){
// // 			Monster.isHuman = true;
// // };
// // 	this.spellTwo = function(Vampire)
// // 			Monster.isHuman = true;}
// // }


// // var franky = new Monster("Franky");
// // var dracula = new Vampire("Dracula");
// // var merlin = new Wizard ("Merlin");








// // // $("form").submit(function(event) {
// // //   		if ($("input:first" ).val() === "jquery") {
// // //     $(".display").text("Validated!").show();
// // //     alert("Thank you for typing correctly");
// // //     return;
// // //   }
 
  
// // //   $(".display").text("Incorrect, genius!").show().fadeOut(5000);
// // //   alert("No Way!");
// // //   event.preventDefault();
// // // });















