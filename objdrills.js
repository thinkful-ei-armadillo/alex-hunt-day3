'use strict';

//----------------------------//
// Object Drills 1:           //
//----------------------------//

function createMyObject() {
    return {
        foo: 'bar',
        answerToUniverse: 42,
        'olly olly': 'oxen free',
        sayHello: function() { return 'hello' },
    }
}

function personMaker() {
    var person = {
        firstName: 'Paul',
        lastName: 'Jones',
        fullName: function() { return `${this.firstName} ${this.lastName}` },
    };
    return person;
}

//----------------------------//
// Object Drills 2:           //
//----------------------------//

function makeStudentReport(data) {
    return data.map(obj => `${obj.name}: ${obj.grade}`);
}

function findById(items, idNum) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === idNum) {
            return items[i];
        }
    }
}

function validateKeys(object, expectedKeys) {
    for (let i = 0; i < expectedKeys.length; i++) {
        if (!(expectedKeys[i] in object)) {
            return false;
        }
    }
    return (expectedKeys.length === Object.keys(object).length);
}

//--------------------------------------//
//Iterating over an object's properties://
//--------------------------------------//

const objIterate = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 5,
}

//Test:
// for (let key in objIterate) {
//     console.log(key+": "+objIterate[key]);
// }

//------------------//
//Arrays of objects://
//------------------//

const employees = [
    { name: 'Joe', jobTitle: 'Manager', boss: 'Rebecca' },
    { name: 'Bob', jobTitle: 'Worker', boss: 'Joe' },
    { name: 'Alex', jobTitle: 'King', boss: null },
    { name: 'Rebecca', jobTitle: 'CEO', boss: 'Alex' },
    { name: 'Emily', jobTitle: 'CFO', boss: 'Rebecca' }
]

//Test:
// employees.forEach(obj => {
//     console.log(`${obj.name} has the title of: ${obj.jobTitle}`);
// });

//-----------------------------//
//Properties that aren't there://
//-----------------------------//

// employees.forEach(obj => {
//     console.log(`${obj.jobTitle} ${obj.name} reports to ${obj.boss ? 'reports to '+obj.boss : "doesn't report to anybody"}.`);
// });

//----------------------------//
//Factory Functions with LOTR://
//----------------------------//

class Character {
    constructor(name, race, origin, weapon='no weapon', attack, defense ) {
        this.name = name;
        this.nickname = name.split(' ')[0];
        this.race = race;
        this.origin = origin;
        this.attack = attack;
        this.defense = defense;
        this.weapon = weapon;
    }

    describe() {
        return `${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}.`;
    }

    evaluateFight(enemy) {
        const x = Math.max(this.attack - enemy.defense, 0);
        const y = Math.max(enemy.attack - this.defense, 0);
        return `Your opponent takes ${x} and you receive ${y}.`;
    }
}

let characters = [
    new Character('Gandalf the White', 'Wizard', 'Middle Earth', 'a wizard staff', 10, 6),
    new Character('Bilbo Baggins', 'Hobbit', 'The Shire', 'the Ring', 2, 1),
    new Character('Frodo Baggins', 'Hobbit', 'The Shire', 'Sting and Barrow Blade', 3, 2),
    new Character('Aragorn son of Arathorn', 'Man', 'Dunnendain', 'Anduril', 6, 8),
    new Character('Legolas', 'Elf', 'Woodland Realm', 'a Bow and Arrow', 8, 5),
    new Character('Arwen Undomiel', 'Half-Elf', 'Rivendell', 'Hadhafang', 7, 4),
]

//Tests:

//find test:
//console.log(characters.find(obj => obj.nickname === 'Aragorn').describe());

//filter test:
//const hobbits = characters.filter(obj => obj.race === 'Hobbit');
// hobbits.forEach(obj => { console.log(obj.describe()) });

//filter test 2:
// const attackOver5 = characters.filter(obj => obj.attack > 5);
// attackOver5.forEach(obj => { console.log(obj.evaluateFight(characters[4])) });

//Weapon test:
// characters.forEach(obj => { console.log(obj.describe()) });


//-------------------------//
// BONUS: A Database Search//
//-------------------------//

const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
];

const findOne = function(arr, query) {
    const filter = function(obj) {
        for (let idx in searchParameters) {
            const key = searchParameters[idx];
            if (!(query[key] in obj || query[key] === obj[key])) {
                return false;
            }
        }
        return true;
    }
    
    const searchParameters = Object.keys(query);
    const result = arr.find(obj => filter(obj));
    return result ? result : null;
}

//Test:
// console.log(findOne( HEROES, { id: 2, name: 'Aquaman' }  ));

//----------------------------//
// BONUS II: A Database Search//
//----------------------------//

const Database = {
    store: {
        heroes: [
            { id: 1, name: 'Captain America', squad: 'Avengers' },
            { id: 2, name: 'Iron Man', squad: 'Avengers' },
            { id: 3, name: 'Spiderman', squad: 'Avengers' },
            { id: 4, name: 'Superman', squad: 'Justice League' },
            { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
            { id: 6, name: 'Aquaman', squad: 'Justice League' },
            { id: 7, name: 'Hulk', squad: 'Avengers' },
        ]
    },
    findOne: function(query) {
        return findOne(this.store.heroes,query); //why rewrite the function saved above when I can just pass the udpated variables...
    }
};

//Test:
// console.log(Database.findOne({ id: 2 }));