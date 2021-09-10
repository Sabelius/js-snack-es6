const numbers = [11, 22, 33, 74, 85, 96, 27, 38, 49, 50, 5, 7, 8, 12, 45, 66];

const a = 4;
const b = 12;

console.log(numbers);

const fewNumbers = numbers.filter((element, index) =>{
  if(index >= a && index <= b){
    return true;
  }
  return false;
})
console.log(fewNumbers);


