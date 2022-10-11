// const co = 1;
// console.log(co)

// var va = 1;
// //console.log(va);
// document.write(va)


// let _let = 22;

// const arr = [1,2,3];
// _let = 11;
// arr.push(111);

// let a = function() {
//     document.write('a');
// }
// a();

// function a1() {
//     console.log("function - ", this);
//     document.write(a1)
// }


// function par(a,b,c) {
//     let _le1 = 22;
//     let _le3 = 22;
//     let _le2 = 22;

//     console.log("Summa", _le1*_le2*_le3);

// }
// par();
// let name = ('Java');




// const name = prompt('Enter youtr name :', '');
// document.innerHTML = name ? ('Hello ' + name) : "no name :(";

// function ran(n) {
//     console.log("Hello ", n ,Math.floor(Math.random() * 100 ) + 1,"your age");
// }
// ran(name);



// let _str = "111.1111";

// document.write(parseFloat(_str));
// document.write("<br>");
// let name = input;
// console.log(name);



// let age = prompt('enter your age :');

// let  opr = (n) =>{
//     if (n >= 50) {
//         console.log("You'r very stariy");
        
//     } else {
//         console.log("Vi molodi");
//     }
// }

// opr(age);

let number = prompt('Enter number :');

let func = (num) =>{
    switch (num) {
        case '1':
            alert('Monday')
            break;
        case '2':
            alert('Tu')
            break;
        case '3':
            alert('We')
            break;
        case '4':
            alert('Th')
            break;
        case '5':
            alert('Fr')
            break;
        case '6':
            alert('Sa')
            break;
        case '7':
            alert('Su')
            break;
        default:
            return('Not')
    }
}
func(number);