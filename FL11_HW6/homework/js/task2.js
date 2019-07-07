let a = parseFloat(+prompt('Enter A value'));
let b = parseFloat(+prompt('Enter B value'));
let c = parseFloat(+prompt('Enter C value'));

if (a + b > c && c + b > b && b + c > a) {
  if (a === b & b === c & c === a) {
    console.log('Equivalent triangle')
  } else if (a === b || b === c || c === a) {
    console.log('Isosceles triangle')
  } else {
    console.log('Normal triangle')
  }
} else {
  console.log('Triangle Doesnt Exist')
}
