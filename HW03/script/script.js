let sum = 0;
let number = 50;

while (number <= 100) {
  sum = sum + number;
  number++;
}
console.log(sum);

const k = 7;
for (let i = 1; i <= 10; i++) {
  console.log(k * i);
}

let g = Number(prompt('input a number'));
console.log(g);
let sum2 = 0;
for (let i = 0; i < g + 1; i++) {
  if (i % 2 === 0) {
    // empty
  } else {
    sum2 = sum2 + i;
  }
}
console.log(sum2);
