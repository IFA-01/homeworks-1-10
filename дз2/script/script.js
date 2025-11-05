let a = prompt("input a");
let b = prompt("input b");

if (a>b) {
    console.log(a);
}else{
    console.log(b);
}

//let monthNumber = prompt("input a number");
//let months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
//console.log(months[monthNumber-1]);

let monthNumber = prompt('input a number');
switch(monthNumber) {
    case '1':
        console.log('jan')
        break;    
    case '2':
        console.log('feb')
        break;
    case '3':
        console.log('mar')
        break;
    case '4':
        console.log('apr')
        break;
    case '5':
        console.log('may')
        break;
    case '6':
        console.log('jun')
        break;
    case '7':
        console.log('jul')
        break;
    case '8':
        console.log('aug')
        break;
    case '9':
        console.log('sep')
        break;
    case '10':
        console.log('oct')
        break;
    case '11':
        console.log('nov')
        break;
    case '12':
        console.log('dec')
        break;
}



let sSquare = prompt('input an S for a square');
let sCircle = prompt('input an S for a circle');
let hSquare = Math.sqrt(sSquare);
let dCircle = 2*(Math.sqrt(sCircle/3.14));
if (dCircle<hSquare) {
    console.log('circle will fit into a square');
} else {
    console.log('circle wont fit into a square');
}