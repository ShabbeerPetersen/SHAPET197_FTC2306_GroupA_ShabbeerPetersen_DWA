const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// Use forEach to console log each name to the console.
names.forEach((name) => {
  console.log(name);
});

// Use forEach to console log each name with a matching province.
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Using map, loop over all province names and turn the string to all uppercase.
const upperCaseProvinces = provinces.map((province) => province.toUpperCase());

// Create a new array with map that has the amount of characters in each name.
const numOfCharNames = names.map((name) => name.length);

// Using sort, sort all provinces alphabetically.
const sortedProvinces = provinces.toSorted();

// Use filter to remove all provinces that have the word "Cape" in them. After filtering the array, return the amount of provinces left.
const filteredProvinces = provinces.filter(
  (province) => !province.toLowerCase().includes("cape")
);

// Create a boolean array by using map and some to determine whether a name contains an 'S' character.
const RemoveLetterArray = names.map((name) => name.toLowerCase().includes("s"));

// Using only reduce, turn the above into an object that indicates the province of an individual.
const nameProvinceObject = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});

const collected = [
  [upperCaseProvinces],
  [numOfCharNames],
  [sortedProvinces],
  [filteredProvinces.length],
  [RemoveLetterArray],
  [nameProvinceObject],
];

collected.forEach((innerArray) => {
  innerArray.forEach((element) => {
    console.log(element);
  });
});
