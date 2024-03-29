//1

//Обявите переменные c1-c4, чтобы не было ошибок компиляции
// в этом блоке и блоке с проверками

const c1: number = 2;
const check_1: number = c1 + 5;

const c2: string = "house";
const check_2 = c2.substring(0);

const c3: [boolean, number] = [true, 2];
const check_3: boolean = c3[0];

const c4: string[] = [];
const check_4 = c3[1] + 5;

const check_5 = c4.push("lalaka");

//2

// Задате типизацию и значения для a, b, c и d, так, чтобы
// не было ошибок компиляции.

const a: number = 1;
const b: string = "";
const c: [null, [string, boolean]] = [null, ["str", true]];
const d: [number] = [1];

const q1 = a;
const q2 = d[0];
const q3 = q2 + q1 + d.length;
const q4 = b.length + b[2].length;
const q5 = b === c[1][0];
const q6 = c[1][0] === c[1][0][0];
const q7 = (q6 === q5) === c[1][1];
const q8: null = c[0];

//3
// Укажите любой тип для переменной e, чтобы болк ниже компилировался

let e: any;

const e1 = e;
e.push("lalaka");
const e2: boolean = e[2];
const e3: [10, 15] = e;
const e4: [string] = e;
const e5: Array<[string | 10]> = [...e[50]];

//4

//Укажите типы, чтобы не было ошибок компиляции

let b1: { f: string | number } = { f: 15 + 15 };
b1 = { f: "lalaka" + "malaka" };

let b2: { f1?: number[]; f2: { f3: string } } = { f2: { f3: "lalaka" } };
b2 = { f1: [10], f2: { f3: "malaka" } };

let b3: { f1: boolean } = { f1: true };
b3 = { f1: false };
b3.f1 = true;

let b4: { a: boolean; b: boolean } = { a: true, b: false };
b4["c"] = false;
b4["q"] = false;
b4["a" + "b"] = true;

//5

//Укажите сигнатуры функций a1-a5, чтобы не было ошибок компиляции

function a1(a: number): number {
  return 1;
}
function a2(a: number | string, b: boolean): void {}
function a3(a?: string | object): void {}
function a4(): number {
  return 1;
}

function a5(...args: Array<string>): string {
  return args.join(", ");
}

a1(10);
a1(5 + 2);
a2(10, true);
a2("lalaka", false);
a3();
a3({});
a3({ f1: "malaka" });
const _a4: number = a4();
const _a5: string = a5(...["lalaka", "malaka"]);
