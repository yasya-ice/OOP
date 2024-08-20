class Student {
  static #nextId = 1;

  #name;
  #id;
  #status;

  constructor(name) {
      this.#name = name;
      this.#id = Student.#nextId++;
      this.#status = "Active";
  }

  #isValidStatus(status) {
      const validStatusValues = ["Active", "Expelled", "Finished", "Inactive"];
      return validStatusValues.includes(status);
  }

  getId() {
      return this.#id;
  }

  getName() {
      return this.#name;
  }

  setStatus(status) {
      if (this.#isValidStatus(status)) {
          this.#status = status;
      }
  }

  getStatus() {
      return this.#status;
  }
}

// Пример использования
const student1 = new Student('Anneli');
console.log(student1.getId()); 
console.log(student1.getName()); 
console.log(student1.getStatus()); 

student1.setStatus('Finished');
console.log(student1.getStatus());
