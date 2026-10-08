
// ==========================================
// STUDENT MANAGEMENT SYSTEM
// ==========================================

// 3 VARIABLES / PROPERTIES
let schoolName = "ABC School";
let schoolYear = 2026;
let passingGrade = 75;

// 3 ARRAYS
let subjects = ["Math", "Science", "English"];
let grades = [85, 90, 78];
let hobbies = ["Gaming", "Reading", "Basketball"];

// ==========================================
// 1. CLASS - PERSON
// ==========================================

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log("My name is " + this.name);
    }

    showAge() {
        console.log("Age: " + this.age);
    }
}

// ==========================================
// 2. CLASS - STUDENT
// INHERITANCE #1
// ==========================================

class Student extends Person {

    // CONSTRUCTOR #1
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(this.name + " is studying.");
    }

    // POLYMORPHISM
    introduce() {
        console.log("I am student " + this.name);
    }
}

// ==========================================
// 3. CLASS - TEACHER
// INHERITANCE #2
// ==========================================

class Teacher extends Person {

    // CONSTRUCTOR #2
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    teach() {
        console.log(this.name + " teaches " + this.subject);
    }

    // POLYMORPHISM
    introduce() {
        console.log("I am teacher " + this.name);
    }
}

// ==========================================
// 4. CLASS - SCHOOL
// ==========================================

class School {

    constructor(name) {
        this.name = name;
    }

    showSchool() {
        console.log("School: " + this.name);
    }
}

// ==========================================
// 4 OBJECTS
// ==========================================

let student1 = new Student("John", 18, 85);
let student2 = new Student("Maria", 19, 92);
let teacher1 = new Teacher("Mr. Smith", 35, "Math");
let school1 = new School("ABC School");

// ==========================================
// 2 OBJECT LITERALS
// ==========================================

let address = {
    city: "Cebu",
    country: "Philippines"
};

let contact = {
    email: "student@gmail.com",
    phone: "123456789"
};

// ==========================================
// 3 CONDITIONALS
// ==========================================

// Conditional #1
if (student1.grade >= passingGrade) {
    console.log("John passed.");
} else {
    console.log("John failed.");
}

// Conditional #2
if (student2.grade >= 90) {
    console.log("Maria has an excellent grade.");
} else {
    console.log("Maria needs improvement.");
}

// Conditional #3
if (student1.age >= 18) {
    console.log("John is an adult.");
} else {
    console.log("John is a minor.");
}

// ==========================================
// 3 LOOPS
// ==========================================

// Loop #1
for (let i = 0; i < subjects.length; i++) {
    console.log("Subject: " + subjects[i]);
}

// Loop #2
for (let i = 0; i < grades.length; i++) {
    console.log("Grade: " + grades[i]);
}

// Loop #3
for (let i = 0; i < hobbies.length; i++) {
    console.log("Hobby: " + hobbies[i]);
}

// ==========================================
// METHODS
// ==========================================

student1.introduce();
student1.showAge();
student1.study();

student2.introduce();
student2.study();

teacher1.introduce();
teacher1.teach();

school1.showSchool();

// ==========================================
// ENCAPSULATION #1
// ==========================================

class BankAccount {

    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount();

account.deposit(1000);

console.log("Bank Balance: " + account.getBalance());

// ==========================================
// ENCAPSULATION #2
// ==========================================

class User {

    #password = "12345";

    checkPassword(password) {
        return password === this.#password;
    }
}

let user = new User();

console.log("Password correct: " + user.checkPassword("12345"));

// ==========================================
// ABSTRACTION
// ==========================================

class Animal {

    makeSound() {
        console.log("Animal makes a sound.");
    }
}

class Dog extends Animal {

    makeSound() {
        console.log("Dog says: Woof!");
    }
}

let dog = new Dog();

dog.makeSound();
