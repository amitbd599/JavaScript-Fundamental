const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => {
  console.log(a, b);
  return a - b;
});
console.log(numbers);
