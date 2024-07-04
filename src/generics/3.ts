function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const objA = { name: "Alice", age: 25 };
const objB = { position: "Developer", weight: 70 };

const mergedObject = merge(objA, objB);

console.log(mergedObject);