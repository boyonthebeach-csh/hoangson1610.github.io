// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true,
// nếu không trả về false
// Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

// Ví dụ:

// checkStringExist("i love you", "you") => true
// checkStringExist("i love you", "hate") => false
console.log('Bai 1');

    function check(string,check_string) {
        return string.includes(check_string);
    } 

    console.log(check('hello world','world'));
    console.log(check('hello world','worlds'));

// Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi 
// và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

// Ví dụ:

// shortenString("Xin chào các bạn") => "Xin chào..."
// shortenString("hello') => "hello"
console.log('Bai 2');

    function shortenString(string) {
        if (string.length > 8 ){
            console.log(string.slice(0,7) + '...');
        } 
        else {
            console.log(string);
        }
    }

    shortenString('Hello My');
    shortenString('Hello my friends');


// Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi
// đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường),
// kết quả trả về true hoặc false.

// Ví dụ

// "Race car" => true,
// "hello world" => false.
console.log('Bai 3 (Cach 1):');

    function symmetryString(string1) {
        string1 = string1.toLowerCase().replace(/ /g,"");
        
        string2 = string1.split("");
        // console.log(string2);

        string2 = string2.reverse();
        // console.log(string2);

        string2 = string2.join("");
        // console.log(string2);

        console.log(string1.includes(string2));
    }
    symmetryString('Ahha'); 
    symmetryString('Ahh a'); 
    symmetryString('Ahhas21s'); 

// Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 
// 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

// Ví dụ

// 53751 -> 13557
// 14350 -> 10345
// 203950 -> 200359
console.log('Bai 4');

    function sortString(string3) {
        string3 = '' + string3;
        string4 = string3.split("").sort();
        for (let i = 0; i <string4.length; i++) {
            if (string4[0] == 0) {
                for (let j = i + 1; j <string4.length; j++) {
                    if (j != 0) {
                        let number = string4[0];
                        string4[0] = string4[j];
                        string4[j] = number;
                        break;
                    } 
                }
            }
        }
        result = string4.join("");
        console.log(result);
    }

    sortString(1300561800); 

// Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

// Ví dụ:

// "HELLO world" => "hello_world"
// "Xin Chào Các BẠN" => "xin_chào_các_bạn"
console.log('Bai 5');

    function snake_case(sc_string) {
        sc_string = sc_string.toLowerCase();
        result = sc_string.replace(/ /g, '_');
        console.log(result);
    }

    snake_case('HELLO world');
    snake_case('Xin chào các bạn');