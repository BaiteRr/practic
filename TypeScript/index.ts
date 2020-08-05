// // tsc index.ts


// let string: string = 'Hello Typescript'
// let num: number = 42
// let isActive: boolean = false
// let strArray: string[] = ['H', 'e', 'l']
// let numArray: Array<number> = [1, 1, 2, 3]

// function info (name: string, age: number): void {
//   console.log(`Info: ${name}, ${age}`)
// }

// info('Ilya', 27)

// function calc(a: number, b: number | string): number {
//   if (typeof b === 'string') b = +b
//   return a + b
// }

// console.log(calc(20, 3))

// class Server {
//   static VERSION = '1.0.3'

//   public name: string
//   protected ip: number
  
//   private status: string = 'working'

//   constructor(name: string, ip: number) {
//     this.name = name
//     this.ip = ip
//   }

//   public turnOn() {
//     this.status = 'working'
//   }

//   protected turnOff() {
//     this.status = 'offline'
//   }

//   public getStatus(): string {
//     return this.status
//   }
// }

// const server: Server = new Server('AWS', 1234)

// class Server {
//   static VERSION = '1.0.3'
  
//   private status: string = 'working'

//   constructor(public name: string,  protected ip: number) {
//   }

//   public turnOn() {
//     this.status = 'working'
//   }

//   protected turnOff() {
//     this.status = 'offline'
//   }

//   public getStatus(): string {
//     return this.status
//   }
// }

// const server: Server = new Server('AWS', 1234)

// interface UserInterface {
//   name: string
//   age: number
//   logInfo: () => void
//   id?: any
// }

// const user: UserInterface = {
//   name: 'Ilya',
//   age: 27,
//   logInfo() {
//     console.log(this.name + ' ' + this.age)
//   }
//  }

// interface SayHello {
//   sayHello: () => void
// }

// class User implements SayHello {
//   constructor(private name: string, private age: number) {}
//   sayHello() {
//     console.log(this.name + ' Hello')
//   }
// }

// const arr: Array<number> = [1, 2, 3, 4]

interface User {
  id: number
  name: string
  age: number
}

const users: Array<User> = [
  {id: 1, name: 'V', age: 2},
  {id: 2, name: 'K', age: 3}
]
const users2: User[] = [
  { id: 1, name: 'V', age: 2 },
  { id: 2, name: 'K', age: 3 }
]