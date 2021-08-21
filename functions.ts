function getSumJs(num1, num2) {
	return num1 + num2;
}
console.log(
	"🚀 ~ file: functions.ts ~ line 2 ~ getSumJs ~ getSumJs",
	getSumJs(1, 3)
);

function getSumTs(num1: number, num2: number): number {
	return num1 + num2;
}
console.log(
	"🚀 ~ file: functions.ts ~ line 7 ~ getSumTs ~ getSumTs",
	getSumTs(1, 5)
);

let mySum = function (num1: any, num2: any): number {
	typeof num1 !== "number" ? (num1 = parseInt(num1)) : num1;
	typeof num2 !== "number" ? (num2 = parseInt(num2)) : num2;
	return num1 + num2;
};
console.log("🚀 ~ file: functions.ts ~ line 22 ~ mySum", mySum("22", 1));

function getName(firstName: string, lastName?: string): string {
	if (!lastName) {
		return firstName;
	}
	return firstName + " " + lastName;
}
console.log(
	"🚀 ~ file: functions.ts ~ line 25 ~ getName ~ getName",
	getName("John")
);
console.log(
	"🚀 ~ file: functions.ts ~ line 25 ~ getName ~ getName",
	getName("John", "Doe")
);
function myVoidFunc(): void {
	return;
}
console.log(
	"🚀 ~ file: functions.ts ~ line 39 ~ myVoidFunc ~ myVoidFunc",
	myVoidFunc
);
