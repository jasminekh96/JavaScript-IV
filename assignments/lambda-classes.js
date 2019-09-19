// CODE here for your Lambda Classes
class Person {
	constructor(attributes) {
		this.name = attributes.name;
		this.age = attributes.age;
		this.location = attributes.location;
	}
	speak() {
		return `Hellow my name is ${this.name} I am from ${this.location}.`;
	}
}

class Instructor extends Person {
	constructor(attributes) {
		super(attributes);
		this.specialty = attributes.specialty;
		this.favLanguage = attributes.favLanguage;
		this.catchPhrase = attributes.catchPhrase;
	}
	demo(subject) {
		return `Today we are learning about ${subject}.`;
	}
	grade(student, subject) {
		return `${student.name} recieves a perfect score on ${subject}.`;
	}
}

class Student extends Person {
	constructor(attributes) {
		super(attributes);
		this.previousBackground = attributes.previousBackground;
		this.className = attributes.className;
		this.favSubjects = attributes.favSubjects;
	}
	listsSubjects() {
		return `${this.favSubjects}`;
	}
	PRAssignment(student, subject) {
		return `${student.name} has submitted a PR for ${subject}.`;
	}
	sprintChallenge(student, subject) {
		return `${student.name} has begun sprint challenge on ${subject}.`;
	}
}

class ProjectManagers extends Instructor {
	constructor(attributes) {
		super(attributes);
		this.gradClassName = attributes.gradClassName;
		this.favInstructor = attributes.favInstructor;
	}
	standUp(channel) {
		return `${this.name} announces to ${channel}, @channel standy times!`;
	}
	debugsCode(name, student, subject) {
		return `${name} debugs ${student}'s code on ${subject}.`;
	}
}
//Person
const Fred = new Person({
	name     : 'Fred',
	age      : '32',
	location : 'Bedrock',
});

const Don = new Person({
	name     : 'Don',
	age      : 35,
	location : 'Texas',
});

const James = new Person({
	name     : 'James',
	age      : 25,
	location : 'California',
});
//Instructor
const Brit = new Instructor({
	name        : 'Brit',
	age         : 31,
	location    : 'Canada',
	specialty   : 'redux',
	favLanguage : 'HTML',
	catchPhrase : `Dont for get the homies.`,
});
const Justin = new Instructor({
	name        : 'Justin',
	age         : 23,
	location    : 'Upstate New York',
	specialty   : 'Borderlands',
	favLanguage : 'CSS',
	catchPhrase : `Nice job today guys!`,
});
const Melody = new Instructor({
	name        : 'Melody',
	age         : 25,
	location    : 'Colorado Springs',
	specialty   : 'everything',
	favLanguage : 'Spanish',
	catchPhrase : `Hey guys!`,
});
//students
const Nate = new Student({
	name               : 'Nate',
	age                : 25,
	location           : 'Los Angeles',
	previousBackground : 'JavaScript at old job',
	className          : 'Web24',
	favSubjects        : 'HTML, JavaScript, CSS',
});
const Harrison = new Student({
	name               : 'Harrison',
	age                : 25,
	location           : 'Washington',
	previousBackground : 'Zip',
	className          : 'Web24',
	favSubjects        : 'HTML, CSS',
});
const Norma = new Student({
	name               : 'Norma',
	age                : 25,
	location           : 'Los Angeles',
	previousBackground : 'Worked with CSS before',
	className          : 'Web24',
	favSubjects        : 'HTML, CSS',
});
//Project Manager
const Brad = new ProjectManagers({
	name          : 'Brad',
	age           : 33,
	location      : 'One of the Carolinas',
	specialty     : 'CSS and HTML',
	favLanguage   : 'HTML',
	catchPhrase   : `I love birds!`,
	gradClassName : 'Web24',
	favInstructor : 'Brit',
});
const Logan = new ProjectManagers({
	name          : 'Logan',
	age           : 33,
	location      : 'Texas',
	specialty     : 'Everything',
	favLanguage   : 'C++',
	catchPhrase   : `Oh yea, ok I see the problem.`,
	gradClassName : 'Web24',
	favInstructor : 'Brit',
});
const Stephanie = new ProjectManagers({
	name          : 'Stephanie',
	age           : 23,
	location      : 'Oklahoma',
	specialty     : 'CSS and HTML',
	favLanguage   : 'HTML',
	catchPhrase   : `I live on the internet`,
	gradClassName : 'Web24',
	favInstructor : 'Dustin',
});

console.log(Fred.speak());
console.log(Brit.demo('JavaScript'));
console.log(Brit.grade(Nate, 'HTML'));
console.log(Nate.listsSubjects());
console.log(Nate.PRAssignment(Nate, 'HTML'));
console.log(Norma.sprintChallenge(Norma, 'HTML'));
console.log(Brad.standUp('Channel'));
console.log(Brad.debugsCode('Brad', 'Norma', 'HTML'));
