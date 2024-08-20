// // class PrintName {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }

// //   consoleName = () => {
// //     console.log(this.name);
// //     console.log(this.age);
// //   };
// // }

// // const name = new PrintName("Himanshu", 23);
// // console.log(name);
// // name.consoleName();

// class SumAge {
//   constructor(fAge, lAge) {
//     this.fAge = fAge;
//     this.lAge = lAge;
//   }

//   printAge() {
//     console.log(this.fAge, this.lAge);
//   }

//   addAge() {
//     return this.fAge + this.lAge;
//   }

//   subAge() {
//     return this.fAge - this.lAge;
//   }
// }

// const data = new SumAge(22, 21);
// data.printAge();

// console.log(data.addAge());
// console.log(data.subAge());

// const data = new Date();
// console.log(data.getDay());
// console.log(data.getFullYear());

const map = new Map();

map.set("name", "Himanshu");
map.set("age", 23);

console.log(map.get("name"));
console.log(map.get("age"));
