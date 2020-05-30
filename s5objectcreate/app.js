const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const sam = Object.create(personPrototypes, {
  firstName: {value: 'Sam'},
  lastName: {value: 'Patankar'},
  age: {value: 41}
});

console.log(sam);

console.log(sam.greeting());