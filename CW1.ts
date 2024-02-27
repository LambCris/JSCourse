//1

const arr: number[] = [1, 2, 3, 4, 5];
const arr1: Array<number> = [1, 2, 3, 4, 5];
console.log(arr[0]);

//2
const num: number = 70;
const boolean: boolean = true;
const str: string = "foo";
const arr2: number[] = [1, 2, 3, 4];
const arr3: Array<string> = ["1", "2", "3"];
const arr4: [string] = ["a"];
const arr5: [boolean, number] = [true, 1];
const arr6: [number[], Array<string>] = [
  [1, 2, 3],
  ["1", "1"],
];

//3

const b1: number = 70;
const b2: boolean = false;
const b3: string = "lalaka";
const b4: [boolean, boolean] = [true, false];
const b6: [number, string] = [10, "10"];
const b7: boolean[] = [...[true]];

// кортеж хранит разные типы
