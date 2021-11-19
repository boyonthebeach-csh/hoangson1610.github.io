// function sayHelloWithName(name){
//     console.log(`Xin chào ${name}`);
// }

// sayHelloWithName('Hoàng Công Sơn');


// function sayHelloWithNameAge(name,year){
//     console.log(`Xin chào ${name}. Năm nay ${2021 - year} tuổi `);
// }

// sayHelloWithNameAge('Hoàng Sơn', 1998)

// function sum(a,b)   {
//     console.log(`Tổng 2 số: ${ a + b }`);
// }

// sum (3,4);


// function sum(a,b) {
//     return a+b;
// }


// let data = sum(6,4);
// console.log (data);


//Xin chào 
console.log('Xin chào các bạn');

//Xin chào với tên
function sayHello(X) {
    console.log(`Xin chào ${X}`);
}
sayHello('Hoàng Sơn');

//Xin chào với dấu "" ở tên
function sayHello2(X) {
    console.log(`Xin chào "${X}" `);
}
sayHello2('Hoàng Sơn');

//Tính tổng 2 số 
function sum(a,b) {
    return a+b;
}
let result = sum(5,4);
console.log(result)

//Tính bình phương của 1 số
function binhPhuong(c) {
    return c**2;
}
let result2 = binhPhuong(6);
console.log(result2)

//Tính thế kỷ của nam
function century(year) {
    return year/100;
}
let result3 = Math.floor(century(2021)) + 1;
console.log(result3);

//Tính chu vi của hình tròn

function chuvi(d) {
    return d*3.14;
}
let result4 = chuvi(10);
console.log(result4);

//Tính diện tích hình tròn

function dientich(d) {
    return (d/2)**2 * 3.14;
}
let result5 = dientich(10);
console.log(result5);

//Quy đổi từ cm sang m

function convert(cm) {
    return cm/100;
}
let result6 = convert(123.5);
console.log(result6);

//Quy đổi từ phút sang giờ

function convert_time(time) {
    return time/60;
}
let result7 = convert_time(256);
console.log(result7);

//Bài tập buổi 2
//bài 1
function mark(mark) {
    if (mark >= 80 && mark <= 100) {
        console.log("A");
    } else if (mark >=70 && mark < 85) {
        console.log("B");
    } else if (mark >=40 && mark < 70) {
        console.log("C")
    }
    else {
        console.log("D");
    }
}

mark(15);
mark(41);
mark(75);
mark(91);