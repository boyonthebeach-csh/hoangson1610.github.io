### Array
Array trong js được gọi là mảng, không lưu trữ phần tử hoặc lưu trữ nhiều phần tử, mỗi phần tử có thể có các kiểu dữ liệu khác nhau.

Array không có phần tử nào -> đc gọi là array rỗng.

VD: khai báo array
- cách 1: khai báo rồi mới gán trị 
```javascript
 let arr = []
 let arr[0] = 1
 let arr[1] = 'hello'
 let arr[2] = true
```
- cách 2: khai báo rồi gán giá trị luôn

```javascript
 let arr = [1,'hello', true]
```
### Tính chất tham chiếu của array
Array thuộc loại dữ liệu `reference type`, nghĩa là tham chiếu về mặt địa chỉ của giá trị chứ không phải giá trị đó.
```javascript
 let number = [1,2,3,4,5]
 let number1 = number 
 let number1 = [1,2,3,4,5]
 console.log(number == number1) //hiển thị 'false' vì dù giá trị bằng nhau nhưng khác nhau về địa chỉ lưu trữ giá trị đó.
```

### Duyệt mảng

Cú pháp gọi vào phần tử trong mảng: 
```javascript
array_name[i] //trong đó, i là số thứ tự của phần tử trong mảng, bắt đầu từ 0.
```
VD:
```javascript
let arr = [1,2,3]
console.log[arr[0]] // -> "1" vì arr[0] = 1
console.log[arr[1]] // -> "2" vì arr[1] = 2
console.log[arr[2]] // -> "3" vì arr[2] = 3
```