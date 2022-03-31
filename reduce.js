// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  const shoes = brands.map((brand) => brand.shoes);
  return shoes.reduce((acc, shoes) => [...acc, ...shoes], []);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  const dog = dogs.map((dog) => dog.age);
  const sum = dog.reduce((acc, num) => (acc += num), 0);
  return sum / dog.length;
};
