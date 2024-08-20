class Student{
	constructor(name){
		this.name = name
		this.finished = false
	}
}

const student1 = new Student('Daniel')
console.log(student1)
console.log(student1.name)
console.log(student1.finished)

const student2 = new Student('Anneli')
console.log(student2)
console.log(student2.name)
console.log(student2.finished)