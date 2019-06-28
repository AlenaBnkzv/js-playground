let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
console.log(array1.concat(array2));

//////////////////////////

let array3 = ['a', 'b', 'c','d', 'e', 'f'];
console.log(array3.fill('x', 0, 4));

///////////////////////

let array4 = [3, 5, 1, 2, 4,10];
array4.filter((val) => {
  if (val % 2 == 0) {
    console.log( val );
  }
});

///////////////////////

let array5 = ['a', 'b', 'c','d', 'e', 'f'];
console.log(array5.join('x'));

//////////////////////

let array6 = [3, 5, 1, 2, 4, 10];
let sum1 = array6.reduce((sum, current)=> sum + current);
console.log(sum1);

let sum2 = 0;
for (let i= 0; i < array6.length; i++) {
  sum2 += array6[i];
}
console.log(sum2);


////////////////////////

let array7 = ['a', 'b', 'c','d', 'e', 'f'];
console.log(array7.slice(2,-2));

////////////////////////

let array8 = ['a', 'b', 'c','d', 'e', 'f'];
console.log(array8.fill('x',3,4));

///////////////////////

let o1 = { a: 1 };
let o2 = { b: 2 };
let o3 = { c: 3 };

let copy = Object.assign({}, o1, o2, o3);
console.log(copy);


