/* global describe, it */

(function () {
    'use strict';

    describe('Constructor Testing', function () {
        describe('FighterOne Constructor Test', function () {
        	 var testFighterOne = new FighterOne ();
			 var testFighterOneKnown = new FighterOne ("Louis", "hammer")
			 it('should be an instance of FighterOne', function () {
			 		expect(testFighterOne).to.be.an.instanceof(FighterOne);
        describe('FighterTwo Constructor Test', function (){
            var testFighterTwo = new FighterTwo ();
            var testFighterTwoKnown = new FighterTwo ("Jim", "sword")
            it ('shoud be an instance of FighterOne', function (){
                    expect(testFighterTwo).to.be.an.instanceof(FighterTwo);
        describe ('Weapon Constructor Testing', function (){
            var testWeapon = new Weapon ();
            var testWeaponKnown = new Weapon ("sword", 30)
            it ('should be an instance of Weapon', function (){
                    expect(testWeapon).to.be.an.instanceof(Weapon);
            })
        })
            })
        })

            });
        });
    });
})();
