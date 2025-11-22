function diff(a, b) {
  let diff = 0;
  if (a > b) {
    diff = a - b;
    console.log(diff);
  } else {
    diff = b - a;
    console.log(diff);
  }
}

let a = Number(prompt('input a'));
let b = Number(prompt('input b'));

diff(a, b);

function isWord(text) {
  if (text.includes(' ')) {
    console.log('false');
  } else {
    console.log('true');
  }
}
let text = prompt('input something');
isWord(text);

function pow(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result = result * a;
  }
  console.log(result);
}

let a1 = Number(prompt('Input a'));
let b1 = Number(prompt('Input b'));
pow(a1, b1);
