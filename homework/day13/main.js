// 1.Tìm số lớn nhất trong mảng
    console.log('Bài 1');
    let arr = [2,3,4,1,64,5,2,3,6];
    arr = arr.sort(function(a, b){return a-b});
    let result = arr[arr.length -1];  
    console.log(result);
// 2.Tìm số nhỏ nhất trong mảng
    console.log('Bài 2');
    let arr1 = [2,3,4,1,64,5,2,3,6];
    arr1 = arr1.sort(function(a, b){return a-b});
    let result1 = arr1[0];  
    console.log(result1);
// 3.Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số
// dư tương ứng khi chia mảng cũ cho 2
// Vd : [4,2,5,6,2,7] => [0,0,1,0,0,1]
    console.log('Bài 3');
    function number_array(arr2) {
        let result2 = [];
        for (let i = 0; i < arr2.length; i++) {
            result2.push(arr2[i] % 2);
        }
        console.log(result2);
    }
    number_array([1,2,3,4,5]);
// 4.Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
    console.log('Bài 4');
    function repeatString(arr3) {
        for (let i = 1; i < 10; i++) {
            arr3 = arr3.concat(arr3[0]);
        }
        arr3_string = arr3.join(''); 
        arr3_array = arr3;

        console.log(arr3_array); // kết quả dạng array
        console.log(arr3_string); // kết quả dạng chuỗi
    }
    repeatString(['string']);
// 5.Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu
// gạch ngang.
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'
    console.log('Bài 5');
    function repeatString1(arr4) {
        for (let i = 1; i < 10; i++) {
            // console.log(arr4[0])
            // arr4 = arr4.push('-',arr4[0]);
            // result4 = arr4.join('');
            arr4.push('-',arr4[0]);
            result4 = arr4.join('');
        }
        console.log(result4);
    }
    repeatString1(['repeat']);