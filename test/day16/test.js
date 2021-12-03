// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

// Hãy cẩn thận trường hợp trong mảng có nhiều số lớn nhất

// // Ví dụ:
// max2Numbers([2, 1, 3, 4]) => 3
// max2Numbers([2, 1, 4, 3, 4]) => 3
    // Giải thích
    /*B1: sắp xếp lại các số theo chiều tăng dần
    B2: trả về số đứng thứ 2 từ phải sang của mảng, chính là số lớn thứ 2 của mảng
    */
    function max2Numbers(arr) {
        result = arr.sort(function(a, b){return a-b});
        return result[result.length-2];
    }
    console.log(max2Numbers([2,56,32,48,10]));

// Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

// // Ví dụ:
// getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].
    //Giải thích:
    /* B1: khai báo mảng kết quả
    B2: khai báo mảng độ dài của từng chuỗi trong mảng nhập vào
        sau đó sắp xếp tăng dần để tìm độ dài chuỗi lớn nhất
    B3: tiếp tục duyệt mảng nhập vào, nếu chuỗi nào có độ dài bằng độ dài chuỗi lớn nhất đã tìm được
    ở trên -> thêm vào mảng kết quả
    B4: trả về mảng kết quả
    */
    function getStringHasMaxLength(string_arr) {
        //B1
        let result = [];
        //B2
        let length_arr = [];
        for (let i = 0; i < string_arr.length; i++) {
            length_arr.push(string_arr[i].length);
        }
        let maxLength_arr = length_arr.sort(function(a, b){return a-b});
        //B3
        for (let i = 0; i < string_arr.length; i++) {
            if (string_arr[i].length == maxLength_arr[maxLength_arr.length-1]) {
                result.push(string_arr[i]);
            }
        }
        //B4
        return result;
    }

    console.log(getStringHasMaxLength(['hello','hi','vietnam','helloEm']))

// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó

// // Ví dụ:
// getRandomElement([3, 7, 9, 11]) => 3
// getRandomElement([3, 7, 9, 11]) => 9

    //Giaỉ thích:
    /* Math.floor(Math.random() * arr3.length): hàm Math.random() trả về ngẫu nhiên từ 0->1 ko bao gồm 1
     rồi sau đó nhân với chiều dài của mảng -> ta sẽ được một số thực có giá trị từ 0 và nhỏ hơn chiều
     dài của mảng -> dùng Math.floor để làm tròn xuống số nguyên gần nhất, ta được số thứ tự ngẫu nhiên
     của phần tử trong mảng arr3. -> return về phần tử ngẫu nhiên trong mảng arr3 */
    function getRandomElement(arr3) {
        return arr3[Math.floor(Math.random() * arr3.length)];
    }
    console.log(getRandomElement(['alo',3,'clo',5,6,7]))


// Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đ

// // Ví dụ:
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]
// similarity([1, 2, 3], [3, 4, 5]) => [3]

    //Giaỉ thích:
    /* B1:khai báo một mảng rỗng myArr
    B2: duyệt phần tử mảng thứ nhất, trong khi duyệt thì duyệt phần tử mảng thứ 2, nếu số thứ [i]
    của mảng thứ nhất bằng với số thứ j của mảng thứ 2 thì thêm số đó vào mảng myArr 
    B3: trả về myArr
    */
    function similarity(arr_4_1, arr_4_2) {
        let myArr = [];
        for (let i = 0; i < arr_4_1.length; i++) {
            for (let j = 0; j < arr_4_2.length; j++) {
                if(arr_4_1[i]==arr_4_2[j]) {
                    myArr.push(arr_4_2[j]);
                }
            }
        }
        return myArr;
    }
    console.log(similarity([1,2,3],[1,2,4]));

// Bài 5 (2 điểm). Viết function truyền vào 2 tham số:

// Tham số 1: Là 1 chuỗi thời gian (t) có dạng "giờ:phút:giây"
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.

// // Ví dụ: 
// getTime("9:20:56", 7) => "9:21:3"
// Gợi ý : Hãy quy đổi ra thời gian từ hh:mm:ss ra giây => tính toán => Quy đổi ngược lại từ giây ra hh:mm:ss


// Bài 6 (2 điểm). Cho mảng users như sau:

// users = [
//     {
//         name : "Bùi Công Sơn",
//         age : 30,
//         isStatus : true
//     },
//     {
//         name : "Nguyễn Thu Hằng",
//         age : 27,
//         isStatus : false
//     },
//     {
//         name : "Phạm Văn Dũng",
//         age : 20,
//         isStatus : false
//     }
// ]
// Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true
// Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần

// Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

// getCountElement(["one", "two", "three", "one", "one", "three"])

// // Kết quả

// {
//     one : 3,
//     two : 1,
//     three : 2
// }