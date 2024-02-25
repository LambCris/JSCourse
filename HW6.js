// //1

const orders = {};

function addOrder(orderNumber, amount, callback) {
  let order = orders[orderNumber];
  if (!orders[orderNumber]) {
    orders[orderNumber] = { completed: false };
    callback(
      `Заказ #${orderNumber}: {amount: ${amount}, completed :${false} }`
    );
  } else {
    callback(`Заказ #${orderNumber} уже существует`);
  }
}

addOrder(1, 50, (message) => console.log(message));
addOrder(2, 30, (message) => console.log(message));

function completeOrder(orderNumber, callback) {
  if (orders[orderNumber]) {
    orders[orderNumber] = { completed: true };
    callback(`Заказ #${orderNumber}: {completed: ${true}} `);
  } else {
    callback(`Заказ #${orderNumber} не существует`); // в консоли
  }
}

completeOrder(1, (message) => console.log(message));
console.log(orders);

function listOrders(callback) {
  const copy = JSON.parse(JSON.stringify(orders));
  const formatCopy = Object.entries(copy);
  console.log(formatCopy);

  formatCopy.forEach(([orderId, order]) => {
    if (!order.completed) {
      console.log(`Заказ #${orderId} - не выполнен`);
    } else {
      console.log(`Заказ #${orderId} -  выполнен`);
    }
  });

  const backToObj = Object.fromEntries(formatCopy);
  callback(backToObj);
}

listOrders((backToObj) => console.log(backToObj));

// 2

const usersDataURL = "https://jsonplaceholder.typicode.com/users";

function loadUserData() {
  return new Promise((resolve, reject) => {
    fetch(usersDataURL)
      .then(
        (response) => {
          return response.json();
        },
        (error) => {
          console.log("rejected", error);
        }
      )
      .then((dataUsers) => {
        resolve(dataUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

loadUserData()
  .then((users) => {
    console.log("Данные о пользователях получены:", users);
  })
  .catch((error) => {
    console.error("Ошибка при загрузке данных:", error);
  });

console.log(loadUserData());

// 3

const usersDataURL = "https://jsonplaceholder.typicode.com/users";

async function loadUserData() {
  try {
    const response = await fetch(usersDataURL);
    const dataUsers = await response.json();
    return dataUsers;
  } catch (error) {
    throw error;
  }
}

(async () => {
  try {
    const data = await loadUserData();
    console.log("Данные о пользователях получены:", data);
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
})();

//4 promise.all

const usersDataURL = "https://jsonplaceholder.typicode.com/users";
const postsDataURL = "https://jsonplaceholder.typicode.com/posts";

async function usersData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
  } catch {
    alert(err);
  }
}

async function postsData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
  } catch {
    alert(err);
  }
}

////Promise.all

Promise.all([usersData(), postsData()])
  .then((values) => {
    console.log(values, "users");
    console.log(values, "posts");
  })
  .catch((error) => {
    console.log(error, "произошла ошибка");
  });

////Promise.race

Promise.race([usersData(), postsData()])
  .then((value) => {
    console.log(value, "users");
  })
  .catch((error) => {
    console.log(error, "произошла ошибка");
  });

//5

const usersDataURL = "https://jsonplaceholder.typicode.com/users";

function attack() {
  return new Promise((resolve, reject) => {
    fetch(usersDataURL)
      .then(
        (response) => {
          return response.json();
        },
        (error) => {
          console.log("rejected", error);
        }
      )
      .then((dataUsers) => {
        resolve(dataUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

setInterval(() => {
  attack;
}, 500);

// 6

// console.log("1");
// console.log("8");
// единственные синхронные функции, поэтому выводятся первыми
console.log(1, 8);

// после текущих макрозадач выполняются все микрозадачи, до следующих макрозадач
//последовательно по очереди microtasks.
// setTimeout - macrotask, остается ждать в очереди

// Promise.resolve().then(() => {
//   console.log("5");
//   setTimeout(() => console.log("6"), 0)
// });

// Promise.resolve().then(() => {
//   console.log("7");
// });

console.log(1, 8, 5, 7);

// выполняется macrotasks setTimeout, сразу после текущего кода
// по завершени macrotasks setTimeout выполнится microtasc promise

// setTimeout(() => {
//   console.log("2");
// }, 0);

// setTimeout(() => {
//   console.log("3");
//   Promise.resolve().then(() => console.log("4"));
// }, 0);

console.log(1, 8, 5, 7, 2, 3, 4);

// Здесь выполняется последний setTimeout(() => console.log("6"), 0)
// который ждал в очереди macrotasc

console.log(1, 8, 5, 7, 2, 3, 4, 6);
