// Basic Types

let id: number = 5
let company: string = "Traversy Media"
let isPublished: boolean = true
let x: any = "Hello"

let ids: number[] = [1, 2, 3, 4, 6]
let arr: any[] = [1, true, "Hello"]

// Tuple
let person: [number, string, boolean] = [1, "Brad", true]

// Tuple Array
let employee: [number, string][]

employee = [
	[1, "Brad"],
	[2, "John"],
	[3, "Jill"]
]

// Union
let pid: string | number = "22"

// Enum

enum Direction1 {
	Up = 1,
	Down,
	Left,
	Right
}
// console.log(Direction1.Down)
enum Direction2 {
	Up = "up",
	Down = "down",
	Left = "left",
	Right = "right"
}
// console.log(Direction2.Down)

// Object

type User = {
	id: number
	name: string
}

const user: User = {
	id: 1,
	name: "John"
}
