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

employees.forEach(obj => {
    console.log(`${obj.jobTitle} ${obj.name} reports to ${obj.boss ? 'reports to '+obj.boss : "doesn't report to anybody"}.`);
});

