// ==========================================
// JAVASCRIPT STUDENT PROGRAM
// ==========================================

// 10 LET VARIABLES
let studentName = "John";
let age = 18;
let grade = 85;
let city = "Cebu";
let section = "A";
let score = 90;
let subject = "Math";
let school = "ABC School";
let passed = true;
let hobby = "Gaming";

// 10 CONST VARIABLES
const country = "Philippines";
const year = 2026;
const teacher = "Mr. Smith";
const passingGrade = 75;
const maxScore = 100;
const room = "Room 101";
const semester = "1st Semester";
const program = "IT";
const schoolType = "Private";
const day = "Monday";

// ==========================================
// 5 ARROW FUNCTIONS
// ==========================================

const greet = () => "Hello, " + studentName;

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

const isPassing = grade => grade >= passingGrade;

const welcome = name => `Welcome, ${name}!`;

console.log(greet());
console.log(add(10, 5));
console.log(multiply(5, 2));
console.log(isPassing(grade));
console.log(welcome(studentName));

// ==========================================
// 10 TEMPLATE LITERALS
// ==========================================

console.log(`Student: ${studentName}`);
console.log(`Age: ${age}`);
console.log(`Grade: ${grade}`);
console.log(`City: ${city}`);
console.log(`Section: ${section}`);
console.log(`Score: ${score}`);
console.log(`Subject: ${subject}`);
console.log(`School: ${school}`);
console.log(`Teacher: ${teacher}`);
console.log(`Hobby: ${hobby}`);

// ==========================================
// 3 DESTRUCTURED ARRAYS
// ==========================================

const students = ["John", "Maria", "Peter"];

const [student1, student2, student3] = students;

console.log(student1, student2, student3);

const grades = [85, 90, 78];

const [grade1, grade2, grade3] = grades;

console.log(grade1, grade2, grade3);

const subjects = ["Math", "Science", "English"];

const [subject1, subject2, subject3] = subjects;

console.log(subject1, subject2, subject3);

// ==========================================
// 3 DESTRUCTURED OBJECT LITERALS
// ==========================================

const student = {
    name: "John",
    age: 18,
    grade: 85
};

const { name, age: studentAge, grade: studentGrade } = student;

console.log(name, studentAge, studentGrade);

const teacherInfo = {
    teacherName: "Mr. Smith",
    teacherAge: 35,
    teacherSubject: "Math"
};

const {
    teacherName,
    teacherAge,
    teacherSubject
} = teacherInfo;

console.log(teacherName, teacherAge, teacherSubject);

const schoolInfo = {
    schoolName: "ABC School",
    schoolCity: "Cebu",
    schoolCountry: "Philippines"
};

const {
    schoolName,
    schoolCity,
    schoolCountry
} = schoolInfo;

console.log(schoolName, schoolCity, schoolCountry);

// ==========================================
// 2 ARRAYS USING SPREAD OPERATOR
// ==========================================

const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Mango", "Orange"];

const allFruits = [...fruits1, ...fruits2];

console.log(allFruits);

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const allNumbers = [...numbers1, ...numbers2];

console.log(allNumbers);

// ==========================================
// 2 OBJECT LITERALS USING SPREAD OPERATOR
// ==========================================

const basicInfo = {
    name: "John",
    age: 18
};

const extraInfo = {
    grade: 85,
    city: "Cebu"
};

const completeInfo = {
    ...basicInfo,
    ...extraInfo
};

console.log(completeInfo);

const contactInfo = {
    email: "john@gmail.com"
};

const addressInfo = {
    city: "Cebu",
    country: "Philippines"
};

const fullInfo = {
    ...contactInfo,
    ...addressInfo
};

console.log(fullInfo);

// ==========================================
// 2 ARRAYS USING .MAP()
// ==========================================

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);

const names = ["John", "Maria", "Peter"];

const upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);

// ==========================================
// 2 ARRAYS USING .FILTER()
// ==========================================

const scores = [50, 75, 80, 60, 90];

const passingScores = scores.filter(score => score >= 75);

console.log(passingScores);

const ages = [12, 18, 20, 15, 25];

const adults = ages.filter(age => age >= 18);

console.log(adults);

// ==========================================
// 2 OBJECT LITERALS USING OPTIONAL CHAINING
// ==========================================

const person = {
    name: "John",
    address: {
        city: "Cebu"
    }
};

console.log(person.address?.city);

const studentData = {
    name: "Maria",
    contact: {
        email: "maria@gmail.com"
    }
};

console.log(studentData.contact?.email);

// ==========================================
// FINAL OUTPUT
// ==========================================

console.log(`Hello ${studentName}!`);
console.log(`You are ${age} years old.`);
console.log(`Your grade is ${grade}.`);
console.log(`You study at ${school}.`);
console.log(`Your subject is ${subject}.`);
console.log(`Your teacher is ${teacher}.`);
console.log(`Your section is ${section}.`);
console.log(`Your hobby is ${hobby}.`);
console.log(`Your city is ${city}.`);
console.log(`You passed: ${passed}.`);
