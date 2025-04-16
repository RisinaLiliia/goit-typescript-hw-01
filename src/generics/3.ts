function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const autor = { name: 'Sara' };
const details = { age: 30, city: 'Otten' };


const merged = merge(autor, details);
console.log(merged);








