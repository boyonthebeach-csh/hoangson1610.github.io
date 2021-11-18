### Khai báo biến 
Có 2 cách khai báo biến: let, const 
- let: chỉ dùng trong phạm vi khối khai báo biến.   
```javascript
//khai báo không gán giá trị cho biến
let name;
//khai báo gán giá trị cho biến
let name = 'Hoàng Sơn'
```
- const: là hằng số, nên khi khai báo phải gán luôn giá trị, không thay đổi được giá trị.
```javascript
const age = 23;
```
### Quy tắc đặt tên biến

- Chứa các ký tự chữ, số, _ và $

- Ký tự đầu tiên không được là số (nên là chữ)
- Có phân biệt hoa thường

- Không trùng với các từ khóa của Javascript như: for, while, this, ...

- Nên đặt tên theo kiểu camelCase nếu tên biến có độ dài 2 từ trở lên cho dễ đọc. Ví
dụ `binhphuong` thì nên đặt là `binhPhuong`

### Phạm vi của biến - Scope
Scope: là phạm vi hoạt động của biến trong chương trình. Có 3 loại scope:
- Global scope: có phạm vị hoạt động ở bất kỳ trong mã javascript của bạn.
- Function scope: có phạm vi hoạt động trong function mà bạn khai báo biến đó.
- Block scope: có phạm vị trong cặp dấu {} mà bạn khai báo biến đó.

### Kiểm tra kiểu dữ liệu của biến
Cú pháp: `typeof`
```javascript
let number = 16;
console.log(typeof number);

let name = 'Việt Nam';
console.log(typeof name);
```
### Kiểu dữ liệu String
- String (chuỗi) là một đoạn text có thể có một hoặc nhiều ký tự.
- Các chuỗi đều phải được bao quanh bằng cặp dấu nháy đơn ' hoặc nháy kép "
```javascript
let chuoiKyTu = 'Xin chào Việt Nam';
let text = "Hello Vietnam";
```
Lưu ý:
- Nếu trong chuỗi cũng có xuất hiện dấu nháy đơn hoặc nháy kép thì phải thêm ký tự \ đằng trước dấu nháy đó.
- Khi muốn Enter xuống hàng một chuỗi thì bắt buộc phải sử dụng dấu + để
nối chuỗi.
### Nối chuỗi
- Để nối chuỗi chúng ta sử dụng dấu + để ghép hai chuỗi (hoặc biến) lại với nhau.
```javascript
let firstName = 'Hoàng';
let lastName = 'Sơn';
let fullName = firstName + lastName;
```
### Template Strings - ES6
Khai báo chuỗi sử dụng ký tự back-tick `` thay cho ký tự ngoặc đơn hoặc ngoặc
kép.
- Khi khai báo chuỗi kiểu này có thể viết chuỗi trong nhiều dòng và có thể dùng dấu
ngoặc đơn hoặc ngoặc kép thoải mái mà không cần dùng escape character.
- Có thể dùng các biến, biểu thức ngay trong chuỗi với cú pháp như sau:
```javascript
`string text ${expression} string text`
```
### Kiểu dữ liệu number
số từ 0-9 và có thể có dấu - đằng trước biểu thị cho số âm.
```javascript
let age = 19;
let year = 2021;
```
### Phép toán cho kiểu dữ liệu number
- Phép cộng trừ nhân chia, lấy dư, bình phương,...
- Đối tượng Math trong Javascript
VD: 
    - Math.min, Math.max : Tìm số nhỏ nhất, lớn nhất trong 1 danh sách số
    - Math.round, Math.ceil, Math.floor : Làm tròn số
    - Math.random() : Random 1 số trong khoảng [0,1]
