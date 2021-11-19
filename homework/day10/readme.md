### Function
Là tập hợp các đoạn code dùng để thực hiện một tác vụ cụ thể nào đó.
Cú pháp:
- định nghĩa function:
```javascript
function functionName(para_1, …, para_n) {
// function code
}
```
- thực thi:
```javascript
functionName(para_1, ..., para_n)
```

Có các loại function:
- Function trả về tham số hoặc không có tham số
- Function có giá trị trả về hoặc không

Đối với function có tham số, có thể set mặc định giá trị cho tham số ngay lúc khai báo tên function. Giúp dễ kiểm soát và ít lỗi hơn.

```javascript
function sayHello(name=“Lan Hương”) {
    console.log(`Xin chào ${name}`);
}
```
### Kiểu dữ liệu Boolean
Chỉ có 2 giá trị là true or false
Cú pháp xác định giá trị Boolean cho biểu thức:
```javascript
Boolean()
```
Truthy value và Falsy value:
- Truthy value: bao gồm các giá trị khi ép kiểu về boolean thì cho giá trị là `true`
- Falsy value: bao gồm các giá trị khi ép kiểu về boolean thì cho giá trị là `false`

Lưu ý:
- Có 6 giá trị falsy: `0`, `NaN`, `''`, `underfined`, `null`, `false`
- Các giá trị còn lại ngoài 6 giá trị trên là truthy

### Câu lệnh if

Thực hiện một hành động nếu điều kiện cho trước là đúng.
Cú pháp:
```javascript
if (điều kiện) {
    //Khối lệnh cần thực thi nếu điều kiện đúng 
}
```
VD:
```javascript
let a = 6;
if (a < 10) {
    console.log('a nhỏ hơn 10');
}
```
### Câu lệnh if else

Nếu điều kiện đúng thực hiện câu lệnh trong if, ngược lại nếu điều kiện sai thì hiện câu lệnh trong else.
Cú pháp:
```javascript
if (điều kiện) {
    //thực hiện khối lệnh này nếu điều kiện đúng
} else {
    // thực hiện khối lệnh này nếu điều kiện sai
}
```
VD:
```javascript
let a = 6;
if (a > 10) {
    console.log('a lớn hơn 10');
} else {
    console.log('a nhỏ hơn 10');
}
```

### Câu lệnh if/else else/if

Chỉ định một điều kiện mới nếu điều kiện đầu tiên là sai
Cú pháp:
```javascript
if (điều kiện) {
    //thực hiện khối lệnh này nếu điều kiện 1 đúng
} else if (điều kiện 2){
    //thực hiện khối lệnh này nếu điều kiện 1 sai, điều kiện 2 đúng 
} else {
    // thực hiện khối lệnh này nếu điều kiện 1 và 2 đều sai
}
```

VD:
```javascript
let a = 6;
if (a > 10) {
    console.log('a lớn hơn 10');
} else if (a < 10) {
    console.log('a nhỏ hơn 10');
} else {
    console.log('a bằng 10');
}
```