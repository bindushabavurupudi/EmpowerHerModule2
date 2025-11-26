const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

const [{name: name1, address: {city:city1, street:{name:stName1}}}, {name:name2, address: {city:city2, street:{name:stName2}}}] = people;

let arr = [];
arr.push(`${name1} lives in ${city1} on ${stName1}`);
arr.push(`${name2} lives in ${city2} on ${stName2}`);
console.log(arr)

