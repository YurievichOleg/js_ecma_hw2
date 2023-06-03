class Student {
    name = '';
    age = 0;
    grade = '';
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo = () => {
        console.log(`name: ${this.name} \nage: ${this.age} \ngrade: ${this.grade}`);
    }
}