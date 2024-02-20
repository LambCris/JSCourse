// 1    Создайте функцию, которая выводит среднее арифметическое всех числовых значений объекта и выводит результат в консоль

const person = {
  name: "Pete",
  age: 24,
  salary: 2550,
  street: "Some street",
  houseNum: 52,
};

function middleNumber(obj) {
  const result = 0;
  const lastResult;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      result += obj[key];
      lastResult = result / 3;
    }
  }
  return lastResult;
}

const totalSum = middleNumber(person);
console.log(totalSum);

//2 

function formatDate(date) {
  const year = date.getFullYear();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return (fullDate = `${day}.${month}.${year},${hours}:${minutes}:${seconds}`);
}

let time = new Date();
console.log(formatDate(time));

//1. Создайте функцию formatDate, которая принимает параметр date - объект Date.
//2. Используя методы объекта Date, получите значения года, месяца, дня, часа, минут и секунд.
//3. Добавьте ведущий ноль к значениям, если они состоят из одной цифры.
//4. Сформируйте строку в формате "DD.MM.YYYY, HH:mm:ss".
//5. Верните отформатированную строку.
