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

// Type Assertion
let cid: any = 1
let customerId = <number>cid
// customerId = 'a'
// let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
	return (x = y)
}

// Void

function log(msg: string | number): void {
	console.log(msg)
}

// log(true)

// Interfaces
interface UserInterface {
	readonly id: number
	name: string
	age?: number
}

const user1: UserInterface = {
	id: 1,
	name: "John"
}

// user1.id = 3

interface MathFunc {
	(x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
// const sub: MathFunc = (x:number,y:number): number => 'x' - y

// Classes

interface PersonInterface {
	id: number
	name: string
	register(): string
}
class Person implements Person {
	id: number
	name: string
	// private password: number
	protected password: number

	constructor(id: number, name: string, password?: any) {
		this.id = id
		this.name = name
		this.password = password
	}

	register() {
		return `${this.name} is now registered`
	}
}

const brad = new Person(1, "Brad Traversy", 1234)
const mike = new Person(2, "Mike Jordan", 4321)

// console.log(brad.password)
console.log(brad.register())

// Extends class

class Employee extends Person {
	position: string

	constructor(id: number, name: string, position: string) {
		super(id, name)
		this.position = position
	}
}

const emp = new Employee(3, "Shawn", "Developer")

console.log(emp.register())
