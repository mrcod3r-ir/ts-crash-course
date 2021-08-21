// types
let myString: string;
myString = "my string variable";
console.log("🚀 ~ file: types.ts ~ line 4 ~ myString", myString);
myString = "my string variable" + " " + "some string";
console.log("🚀 ~ file: types.ts ~ line 6 ~ myString", myString);
myString = "my string variable".slice(0, 5);
console.log("🚀 ~ file: types.ts ~ line 8 ~ myString", myString);

let myNum: number;
myNum = 22;
console.log("🚀 ~ file: types.ts ~ line 12 ~ myNum", myNum);
myNum = 5 + 5;
console.log("🚀 ~ file: types.ts ~ line 14 ~ myNum", myNum);
myNum = 7.8;
console.log("🚀 ~ file: types.ts ~ line 16 ~ myNum", myNum);
myNum = 0xf00d;
console.log("🚀 ~ file: types.ts ~ line 18 ~ myNum", myNum);

let myBool: boolean;
myBool = true;
console.log("🚀 ~ file: types.ts ~ line 22 ~ myBool", myBool);

let myVar: any;
myVar = "string var";
console.log("🚀 ~ file: types.ts ~ line 26 ~ myVar", myVar);
myVar = 46;
console.log("🚀 ~ file: types.ts ~ line 27 ~ myVar", myVar);
myVar = true;
console.log("🚀 ~ file: types.ts ~ line 30 ~ myVar", myVar);

let strArr: string[]; // or let strArr : Array<string>
strArr = ["string", "array"];
console.log("🚀 ~ file: types.ts ~ line 34 ~ strArr", strArr);
// strArr = [1, "www"]; cause error

let numArr: number[]; // or let numArr : Array<number>
numArr = [1, 23, 44];
console.log("🚀 ~ file: types.ts ~ line 39 ~ numArr", numArr);
// numArr = [1,23,'string item'] // cause error

let boolArr: boolean[]; // or let boolArr : Array<boolean>
boolArr = [true, false, true];

let strNumTuple: [string, number];
strNumTuple = ["some string", 55];
console.log("🚀 ~ file: types.ts ~ line 47 ~ strNumTuple", strNumTuple);
// strNumTuple = ["some string", 55, 120, 444]; // cause error
// strNumTuple = [55,'some string'] // cause error

let myVoid: void = null;
console.log("🚀 ~ file: types.ts ~ line 52 ~ myVoid", myVoid);
myVoid = undefined;
console.log("🚀 ~ file: types.ts ~ line 54 ~ myVoid", myVoid);

let myNull: null = null;
console.log("🚀 ~ file: types.ts ~ line 57 ~ myNull", myNull);
let myUndefined: undefined = undefined;
console.log("🚀 ~ file: types.ts ~ line 59 ~ myUndefined", myUndefined);
