let arrTrangle = [];
for (let i = 0; i < 3; i++) {
  arrTrangle[i] = prompt('Введите сторону ' + (i + 1) + ' треугольника:');
}
arrTrangle.sort((a, b) => a - b);
arrTrangle[2] * arrTrangle[2] ===
arrTrangle[0] * arrTrangle[0] + arrTrangle[1] * arrTrangle[1]
  ? alert('Прямоугольный')
  : alert('Не прямоугольный');

let radius = prompt('Введите радиус:');
alert('Длина окружности:' + 2 * 3.14 * Number(radius));
alert('Площадь круга:' + 3.14 * Number(radius) * Number(radius));

//ax^2+bx+c=0
//D=b^2-4*a*c
//d>0 значит +-x
//D==0 значит x
//d<0 значит !x

let a = prompt('Введите a:');
let b = prompt('Введите b:');
let c = prompt('Введите c:');
let D = b * b - 4 * a * c;
if (D > 0) {
  let x1 = (-b + Math.sqrt(D)) / (2 * a);
  let x2 = (-b - Math.sqrt(D)) / (2 * a);
  alert('x1=' + x1 + ' x2=' + x2);
} else if (D === 0) {
  let x = -b / (2 * a);
  alert('x=' + x);
} else {
  alert('Корней нет');
}
