const Person = require('.Person');
class Student extends Person {
	constructor(name){
		super(name);
		this.garde = [];
		this.id = null;
	}
    setId(id) {
        if (this.id === null) {
            this.id = id;
        }
    }
    getId() {
        return this.id;
    }
    getGrades() {
        return this.grades;
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return -1;
        }

        const sum = this.grades.reduce((acc, grade) => acc + grade.grade, 0);
        return sum / this.grades.length;
    }
    addGrade(course, grade) {
        this.grades.push({ course, grade });
    }

    description() {
        return `Student: ${this.name}`;
    }
}

module.exports = Student;