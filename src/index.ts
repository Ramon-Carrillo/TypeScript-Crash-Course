//* Basic Types
let id: number = 5
let company: string = 'Ramon'
let isPublished: boolean = true
//* any allows value to be anything string, boolean, number
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5, 6, 7]

//* Tuple
//* Must follow layout [number, string, boolean] but can't be [number, boolean, string]
let person: [number, string, boolean] = [1, 'string', true]
//* Tuple Array
let employee: [number, string][]
employee = [
  [1, 'string'],
  [2, 'string'],
  [3, 'string'],
]

//* Union
let id2: string | number = 22

//* Enum
//* starts at 0, Up = 0, Down = 1, Left = 2, Right = 3
//* You can set values to Up, Down, Left, Right ex. Up = 1 or Up = 'Up'
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction1.Up)

//* Objects
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'John',
}
console.log(user)

//* Type Assertion
let cid: any = 1
//*let customerId = <number>cid
let customerId = cid as number

//* Functions
function addNum(x: number, y: number): number {
  return x + y
}

//* Void is useful when there is noting being returned
function log(message: string | number): void {
  console.log(message)
}

//* Interface can not be used with unions or primitive
//* Interface is a better selection for Objects than a type
interface UserInterface {
  //* readonly property once number is set can not be change
  readonly id: number
  name: string
  //* ? is optional input
  age?: number
}

const user2: UserInterface = {
  //* id value can not be changed outside of this
  id: 1,
  name: 'John',
}

//* Interface used in a function
interface MathFunc {
  (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y

//* Classes
//* inside class is public but you can choose private or protected, which means you can only access with in the class or extended from the class
//* If you want to use an interface use implements and now :
//* Ex class Person implements Person interface
class Person {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}

//* Subclasses to extend a class
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

//* Generics used to build reuseable components
//*<T> is a place holder
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['hello', 'world', 'string'])
