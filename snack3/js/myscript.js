const numbers = [11, 22, 33, 74, 85, 96, 27, 38, 49, 50, 5, 7, 8, 12, 45, 66]
console.log(numbers);


function myFun(array, a, b) {
  const fewNumbers = array.filter((element, index) => {
    if (index >= a && index <= b) {
      return element;
    }
  });
  return fewNumbers;
  
}
const fewNumbers = myFun(numbers, 4, 12);
console.log(fewNumbers);

