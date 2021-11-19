//Bài tập buổi 2
//bài 1
// Viết function nhập vào biến mark có giá trị từ 0 -> 100. Kiểm tra giá trị của biến mark và in ra nội dụng
console.log('Bài 1')

function mark(mark_value) {
    if (mark_value >= 80 && mark_value <= 100) {
        console.log("A");
    } else if (mark_value >=70 && mark_value < 85) {
        console.log("B");
    } else if (mark_value >=40 && mark_value < 70) {
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

//bài 2
// Viết function truyền vào 2 số a, b. In ra màn hình số có giá trị lớn hơn
console.log('Bài 2')

function compare(a,b) {
    if (a-b > 0) {
        console.log(` Số lớn hơn là ${a} `);
    } else if (a-b == 0) {
        console.log("Hai số bằng nhau");
    } else {
        console.log(` Số lớn hơn là ${b} `);
    }
}

compare(6,9);

//bài 3
//Viết function nhập vào 1 số. Kiểm tra số đó là số âm, số dương hay là số 0.
console.log('Bài 3')

function check(c) {
    if (c > 0) {
        console.log(`c là số dương`);
    } else if (c == 0) {
        console.log(`c là số 0`);
    } else {
        console.log(`c là số âm`);
    }
}

check (-5);
check (0);
check (5);

//bài 4
//Viết function nhập vào 1 số. Kiểm tra số đó là số chẵn hay số lẻ.
console.log('Bài 4')

function check2(d) {
    if (d%2 == 0){
        console.log(`d là số chẵn`);
    } else {
        console.log(`d là số lẻ`);
    }
}

check2 (3);
check2 (2);

//bài 5
//Viết function nhập vào 1 số. Kiểm tra số đó có đồng thời chia hết cho 3 và 5 không.
console.log('Bài 5')

function check3(e) {
    if (e%3 == 0 && e%5 == 0 ){
        console.log(`e chia hết cho cả 3 và 5`);
    } else {
        console.log(`e không chia hết cho cả 3 lẫn 5`);
    }
}

check3 (15);
check3 (9);

//bài 6
// Viết function nhập vào 3 số a, b, c. Kiểm tra xem c có bằng a + b không?
console.log('Bài 6')

function check4(a1,b1,c1) {
    if (c1 == a1 + b1) {
        console.log(`c1 = a1 + b1`);
    } else {
        console.log(`c1 không bằng a1 + b1`);
    }
}

check4 (3,7,10);
check4 (3,7,11);
