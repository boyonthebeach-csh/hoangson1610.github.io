### Câu 1 (1 điểm)

- Phân biệt == và ===
- Lấy ví dụ cho từng loại? Kết quả
- Giải thích vì sao lại có kết quả như thế

*Bài làm:*

- ==: so sánh về mặt giá trị của biến
- ===: so sánh về mặt giá trị và cả kiểu dữ liệu của biến
VD:
```javascript
console.log(1 == "1"); // kết quả: true
console.log(1 === "1"); // kết quả: false
```
*Giải thích:*

- Ở dòng đầu có `==`, kiểu dữ liệu `string` của `"1"` sẽ được chuyển đổi kiểu dữ liệu thành `number`: `1` rồi so sánh giá trị với `1` -> `true`
- Ở dòng hai có `===`, kiểu dữ liệu `string` `"1"` sẽ được giữ nguyên, do đó khiến nó khác với kiểu dữ liệu `number` của `1` -> `false`    
### Câu 2 (1 điểm)

Trình bày về các string methods sau

slice()
split()
includes()
indexOf()
Nội dung trình bày bao gồm:

Cú pháp
Tác dụng
Ví dụ demo

*Bài làm:* 
- `slice()`
**Cú pháp:**  `tenChuoi.slice(viTriDau, viTriCuoi)`
**Tác dụng:** tách 1 chuỗi con ra khỏi một chuỗi gốc thành một chuỗi mới mà không làm thay đổi chuỗi gốc. với `viTriDau` là vị trí bắt đầu và `viTriCuoi` là vị trí kết thúc của chuỗi cần tách. 
**VD:**
```javascript
    let text = "Vietnam";
    const myArray = text.slice(0,4);
    console.log(myArray); // in ra chuỗi mới là "Viet"
```
- `split()`
**Cú pháp:** `tenChuoi.split(dauNganCach)`  
**Tác dụng:** biến một chuỗi thành một mảng với các phần tử là từng ký tự trong chuỗi ban đầu, ngăn cách bởi ký tự `dauNganCach` do mình tự chọn như dấu `,` , `-`, ...
**VD:**
```javascript
    let text = "Vietnam";
    const myArray = text.split("");
    console.log(myArray)// in ra mảng: [V,i,e,t,n,a,m] // in ra mảng: [V,i,e,t,n,a,m]
```
- `includes`
**Cú pháp:** `tenChuoi.includes()`  
**Tác dụng:** kiểm tra xem 1 chuỗi con có nằm trong một chuỗi lớn hay không, trả về `false` hoặc `true`
**VD:**
```javascript
    let text = "Vietnam";
    console.log(text.includes("Viet"))// true
```
- `indexOf`
**Cú pháp:** `tenChuoi.indexOf()`
**Tác dụng:** kiểm tra vị trí bắt đầu của ký tự trong chuỗi
**VD:** 
```javascript
    let text = "Vietnam";
    console.log(text.indexOf("Viet")) // in ra 0
```

### Câu 3 (1 điểm)

Trình bày về các array methods sau

push()
join()
splice()
concat()
Nội dung trình bày bao gồm:

Cú pháp
Tác dụng
Ví dụ demo

*Bài làm:*

- `push`
**Cú pháp:** nameArray.push()
**Tác dụng:**thêm một phần tử vào cuối mảng
**Ví dụ demo:**
```javascript

```
- `join`
**Cú pháp:** nameArray.join()
**Tác dụng:** biến một mảng thành một chuỗi
**Ví dụ demo:**
```javascript

```
- `splice`
**Cú pháp:** nameArray.splice()
**Tác dụng:** thêm hoặc xoá một mảng
**Ví dụ demo:**
```javascript

```
- `concat`
**Cú pháp:** nameArray.concat()
**Tác dụng:** cộng mảng 
**Ví dụ demo:**
```javascript

```

### Câu 4 (1 điểm)

Trình bày về primary type (kiểu dữ liệu nguyên thủy trong Javascript)

Có bao nhiêu loại
Kể tên
Lấy ví dụ từng loại

*Bài làm:*

Có 6 loại: 
`Number`
`Boolean`
`String`
`Null`
`Undefined`
`Object`

### Câu 5 (1 điểm)

Scope trong Javascript là gì?
Có mấy loại scope?
Trình bày về từng loại
Cho ví dụ từng loại

*Bài làm:*
Scope là phạm vi truy cập của một biến

có 3 loại scope:

Global Scope: 

Local scope:

Function scope:

### Câu 6 (1 điểm)

Thế nào là tham số (parameter), thế nào là đối số (argument)
Lấy ví dụ và chỉ ra trong ví dụ đó đâu là tham số, đâu là đối số

*Bài làm:*
Tham số là biến được định nghĩa ngay lúc khai báo hàm function

Đối số là biến được truyền vào trong function để thực hiện hành động
### Câu 7 (2 điểm)

Kể tên các cú pháp trong ES6 đã được học
Trình bày về 2 cú pháp bất kỳ
Tác dụng
Cú pháp
Ví dụ demo

*Bài làm:*
Các cú pháp ES6 đã học:

let/const
template string
default parameter
spread operator
rest parameter
arrow function

### Câu 8 (2 điểm)

Định nghĩa như thế nào là First Class Function?
Trình bày về các cách khai báo function đã được học? Lấy ví dụ cho mỗi cách khai báo function

*Bài làm:*
first class function là :
Gán một biến cho một hàm
Sử dụng một hàm làm argument
Return về một function