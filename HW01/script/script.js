let a = 5;
let b = 6;
console.log(a + b);

let firstStr = 'privet';
let secondStr = 'мир asdasasd';
console.log(String(firstStr + secondStr).length);

let num = prompt('Enter a number:');
let sum = 0;
for (let i = 0; i <= num.length - 1; i++) {
  sum = sum + Number(num[i]);
}
console.log(sum);
