function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

//Solution 1: Iterate through the array
for (const name of user) {
  console.log(greeter(name));
}

//Solution 2: Use a function that accepts an array of strings
function greeterArray(persons: string[]): string[] {
  return persons.map(person => "Hello, " + person);
}

console.log(greeterArray(user));