// Bài tập for loop
// Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
// Ví dụ : repeatString("a") => Kết quả trả về là"aaaaaaaaaa"
console.log('Bài 1');

function repeatString(repeatText) {
    let mainText = '';
    for (let i = 1; i <= 10; i = i + 1) {
        mainText = mainText + repeatText; 
    }
    return mainText;
}

let result = repeatString('a');
console.log(result);

// Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString("a") => Kết quả trả về là "a-a-a-a-a-a-a-a-a-a"
console.log('Bài 2');

function repeatString1(repeatText1) {
    let mainText1 = repeatText1;
    for (let i1 = 1; i1 < 10; i1 = i1 + 1) {
        mainText1 = mainText1 + '-' + repeatText1; 
    }
    return mainText1;
}

let result1 = repeatString1('a');
console.log(result1);


// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString('a', 5) => Kết quả trả về là 'a-a-a-a-a'
console.log('Bài 3');

function repeatString2(repeatText2, n) {
    let mainText2 = repeatText2;
    for (let i2 = 1; i2 < n; i2 = i2 + 1) {
        mainText2 = mainText2 + '-' + repeatText2;
    }
    return mainText2;
}

let result2 = repeatString2('a', 6);
console.log(result2);

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
console.log('Bài 4');

let x = 0;

for (let i3 = 0; i3 <= 100; i3 = i3 + 1) {
    if (i3%5 == 0) {
        x = x + i3;
    }
}
console.log(`Tổng các số chia hết cho 5 từ 0 -> 100 bằng: ${x}`);
// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
console.log('Bài 5');

function theTich(r) {
    return (4*3.14*(r**3))/3;
}
let V = theTich(12);
console.log(`Thể tích hình cầu bằng ${V}`);
// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
// Note : Kết quả xuôi và ngược là như nhau
// Ví dụ :
// sum(3,8) = 22
// sum(8,3) = 22
console.log('Bài 6');

function sum(a,b) {
    let sum_ = 0;
    if (a<b) {
        for (let i4 = a + 1; i4 < b; i4 = i4 + 1) {
            sum_ = sum_ + i4;  
        }
        return sum_;
    }
    if (a>b) {
        for (let i4 = a - 1; i4 > b; i4 = i4 - 1) {
            sum_ = sum_ + i4;  
        }
        return sum_;
    }
}
let result3 = sum(8,3);
console.log(result3);

// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
console.log('Bài 7');

function check(y) {
    let check_value = true;
    if (y<2) {
        check_value = false;
    } else {
        for(let u=2; u < y; u++) {
            if (y%u == 0) {
                check_value = false;
                break;
            }
        }
    }
    return check_value;
}
let result4=check(15);
console.log(result4);

// Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham
// số truyền vào.
console.log('Bài 8');

let numBer = 7;
let sum_value = 0;

for (let t=2; t <= numBer; t = t+1) {
    sum_value = sum_value + t;
    for ( let z = 2; z < t; z++) {
        if (t%z == 0){
            sum_value = sum_value - t;
            break;
        } 
    }
}
console.log(sum_value);
// } 