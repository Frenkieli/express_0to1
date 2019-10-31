const numbers = [1, 2, 3];
const [num1, num2] = numbers;

console.log(num1, num2);

// const person = {
//   name: 'Andy'
// };
// const secondPerson = person;

// person.name = 'Tank';

// console.log(secondPerson);

const person = {
  name: 'Andy'
};
// 展開了所以不是傳位置
const secondPerson = {
  ...person
};

person.name = 'Tank';

console.log(secondPerson);