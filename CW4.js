// 1

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
