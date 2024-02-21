//1
//1. Найдите средний балл каждого студента и добавьте его в объект в виде нового свойства `averageGrade`.
// 2. Отсортируйте студентов по среднему баллу в убывающем порядке.
// 3. Используя метод массива, создайте новый массив `topStudents`, содержащий 3 студентов с самыми высокими средними баллами.

const students = [
  { name: "Alice", grades: [85, 90, 92] },
  { name: "Bob", grades: [78, 80, 75] },
  { name: "Charlie", grades: [90, 92, 88] },
  { name: "Anna", grades: [99, 60, 83] },
  { name: "George", grades: [77, 82, 77] },
  { name: "Nick", grades: [70, 90, 83] },
];

students.forEach((student) => {
  let sum = 0;
  for (let key of student.grades) {
    sum += key;
    const ovrNum = sum / student.grades.length;
    student["averageGrade"] = Math.round(ovrNum); // добавили св-во в объект
  }
  console.log(sum);
});

students.sort((a, b) => {
  return b.averageGrade - a.averageGrade;
});

const topStudents = students
  .filter((student) => student.averageGrade > 27)
  .slice(0, 3);
console.log(topStudents);

//2

// Давайте создадим собственный кастомный метод массива с именем findAndPush,
// который будет выполнять аналогичные действия методам find и push.
// Этот метод будет искать заданный элемент в массиве и, если найден, перемещать его в конец массива.
// Метод будет возвращать true в случае успешной операции и false в противном случае

Array.prototype.findAndPush = function (searchElem) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === searchElem) {
      this.filter((item) => item !== searchElem);
      let that = this.filter((item) => item !== searchElem).concat(searchElem);
      console.log(that); //
      return true;
    }
  }
  return false;
};

const myArray = [0, 1, 2, 3, 4, 5];
const result = myArray.findAndPush(0);
console.log(result);

//3

// Создайте функцию, которая принимает две даты в формате объекта `Date`
// и возвращает разницу между ними в виде объекта с полями `years`, `months`, `days`, `hours`, `minutes`, `seconds`.

function dateDifference(startDate, endDate) {
  const hourDifference = Math.abs(startDate.getHours() - endDate.getHours());
  const monthDifference = Math.abs(startDate.getMonth() - endDate.getMonth());
  const daysDifference = Math.abs(startDate.getDay() - endDate.getDay());
  const minDifference = Math.abs(startDate.getMinutes() - endDate.getMinutes());
  const secondsDifference = Math.abs(startDate.getSeconds() - endDate.getSeconds());
  const msDif = Math.abs(startDate.getMilliseconds() - endDate.getMilliseconds());
  const yearsDifference = Math.abs(startDate.getYear() - endDate.getYear());

  return {
    years: yearsDifference,
    months: monthDifference,
    days: daysDifference,
    hours: hourDifference,
    minutes: minDifference,
    seconds: secondsDifference,
    milliseconds: msDif,
  };
}

const startDate = new Date(2023, 0, 1, 12, 0, 0); // 1 января 2023 года, 12:00:00
const endDate = new Date(2024, 5, 15, 18, 30, 45); // 15 июня 2024 года, 18:30:45

const difference = dateDifference(startDate, endDate);
console.log(difference);

// 4
/*Создайте функцию, которая принимает объект с информацией о студенте и использует деструктуризацию
для извлечения различных данных. Затем выведите эти данные в виде строки.
 */

function printStudentInfo(student) {
  const { name, age, grade } = student;
  const { city, zip } = student.address;
  const [reading, traveling] = student.hobbies;

  return `Student: ${name},Age: ${age}, Grade: ${grade}, City: ${city}, Zip: ${zip}, Hobbies: ${reading}, ${traveling} `;
}

const student = {
  name: "Alice",
  age: 20,
  grade: "A",
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", "traveling"],
};

console.log(printStudentInfo(student));

//5

//создать новый объект newUser (программно)
// console.log(newUser) // {firstName: "Boris", age: 24}

const user = {
  name: "Boris",
  age: 24,
};

const { name: firstName, age } = user;
const newUser = { firstName, age };

console.log(newUser); // {firstName: "Boris", age: 24}
