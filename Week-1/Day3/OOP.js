/* Literal Object */
// (-) Can only define and create a single object in a function.
// (-) property variable name can only be used once.

let participant1 = {
    title: "Mr.",
    firstName: "Frederick",
    lastName: "Brown",
    arrivalTime: 9,
    call: function() {
        console.log(`${this.title} ${this.firstName} ${this.lastName} will attend The Grand Seminar at ${this.arrivalTime}.`);
    }
}
let participant2 = {
    title: "Mrs.",
    firstName: "Emma",
    lastName: "Winsley",
    arrivalTime: 10,
    call: function() {
        console.log(`${this.title} ${this.firstName} ${this.lastName} will attend The Grand Seminar at ${this.arrivalTime}.`);
    }
}

participant1.call();
participant2.call();





/* Function Declaration */
// (+) The function can be used as a template for define and create more than one object.
// (+) Property variable name can be used for all object.

function Attender(title, firstName, lastName, arrivalTime) {
    let participant = {};
    participant.title = title;
    participant.firstName = firstName;
    participant.lastName = lastName;
    participant.arrivalTime = arrivalTime;

    participant.call = function() {
        console.log(`${this.title} ${this.firstName} ${this.lastName} will attend The Grand Seminar at ${this.arrivalTime}.`)
    }
    return participant;
}
let participant1 = Attender('Mr.', 'Frederick', 'Brown', 9);
let participant2 = Attender('Mrs.', 'Emma', 'Winsley', 10);

participant1.call();
participant2.call();





/* Constructor Function */
// (+) Can define and create a single or more object with one function.
// (+) More simple for its code
// (-) 

function Attender(title, firstName, lastName, arrivalTime) {
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
    this.arrivalTime = arrivalTime;

    this.call = function() {
        console.log(`${this.title} ${this.firstName} ${this.lastName} will attend The Grand Seminar at ${this.arrivalTime}.`);
    }
}
let participant1 = new Attender('Mr.', 'Frederick', 'Brown', 9);
let participant2 = new Attender('Mrs.', 'Emma', 'Winsley', 10);

participant1.call();
participant2.call();





/* Object Create */
// (+)
// (-)

const call = {
    title: function() {
        console.log(`${this.title} ${this.firstName} ${this.lastName} will attend The Grand Seminar at ${this.arrivalTime}.`);
    },
    firstName: function() {
        console.log(`${this.title} ${this.firstName} ${this.lastName} will attend The Grand Seminar at ${this.arrivalTime}.`);
    },
    lastName: function() {
        console.log(`${this.title} ${this.firstName} ${this.lastName} will attend The Grand Seminar at ${this.arrivalTime}.`);
    },
    arrivalTime: function() {
        console.log(`${this.title} ${this.firstName} ${this.lastName} will attend The Grand Seminar at ${this.arrivalTime}.`);
    }
}

function Attender(title, firstName, lastName, arrivalTime) {
    let participant = Object.create(call);
    participant.title = title;
    participant.firstName = firstName;
    participant.lastName = lastName;
    participant.arrivalTime = arrivalTime;

    return participant;
}
let participant1 = Attender('Mr.', 'Frederick', 'Brown', 9);
let participant2 = Attender('Mrs.', 'Emma', 'Winsley', 10);