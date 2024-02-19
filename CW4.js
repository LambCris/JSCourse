const person = {
  name: "Pete",
  age: 24,
  salary: 2550,
  street: "Some street",
  houseNum: 52,
};

function middleNumber(obj) {
  let result = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      result += obj[key];
      const lastResult = result / 3;
      console.log(lastResult);
    }
  }
}

console.log(middleNumber(person));
