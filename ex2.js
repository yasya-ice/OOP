class Person{
	constructor(firstname,lastname,age){
		this.firstname = "";
		this.lastname = "";
		this.age = 0;
	}
}

class Student {
	constructor(firstname,lastname,age){
		this.firstname = firstname
		this.lastname = lastname
		this.age = age
	}
}

const person1 = new Person();
person1.firstname = "Daniel";
person1.lastname = "Draick";
person1.age = 24;

const person2 = new Person();
person2.firstname = "Mary";
person2.lastname = "Puu";
person2.age = 49;

const person3 = new Person();
person3.firstname = "Sille";
person3.lastname = "Tammsaru";
person3.age = 69;

const student1 = new Student('Anneli','Neli', 24);
const student2 = new Student('Lukas','Bee', 19);
const student3 = new Student('Milly','Soap', 14);

console.log(person1)
console.log(person2)
console.log(person3)

console.log(student1)
console.log(student2)
console.log(student3)