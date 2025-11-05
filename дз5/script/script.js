let a = [5,-123,562,34,2-43,34,7,32342,345,-13344];
let sum = 0;

a.forEach(function(el) {
    sum = sum+el;
});
console.log(sum);



let b = a.map(function(el){
    let newValue=el*2;
    return newValue;
});
console.log(a);
console.log(b);

let max=0;
let min=a[0];
let c = a.map(function(el){
    if (el>max){
        max = el;
    }
    if(min>el){
        min=el;
    }
});
console.log(max);
console.log(min);