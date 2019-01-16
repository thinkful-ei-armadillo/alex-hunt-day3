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