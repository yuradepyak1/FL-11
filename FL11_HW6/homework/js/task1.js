let ax = prompt('Enter X for A point');
let ay = prompt('Enter Y for A point');
let bx = prompt('Enter X for B point');
let by = prompt('Enter Y for B point');
let cx = prompt('Enter X for C point');
let cy = prompt('Enter Y for C point');
let num = 2;

if((ax+bx)/num === cx && (ay+by)/num === cy){
  console.log('true')
}else{
  console.log('false')
}