### `String Methods`
1. `indexOf`
 cú pháp: `string.indexOf(searchvalue, start)`
 kiểm tra vị trí đầu tiên của giá trị chỉ định , 
 nếu gt không có trong chuỗi -> -1
2. `lastIndexOf`
 cú pháp: `string.lastIndexOf(searchvalue, start)`
 kiểm tra vị trí đầu tiên của giá trị chỉ định nhưng ngược chiều so với indexOf, 
 nếu gt k có trong chuỗi -> -1
3. `includes`
 cú pháp: `string.includes(searchvalue, start)`
 kiểm tra chuỗi được chỉ định có nằm trong một chuỗi mẹ của nó không
 trả về giá trị true or false
4. `slice`
 cú pháp: `string.slice(start, end)`
 cắt lấy một phần của chuỗi -> tạo ra chuỗi mới, mà không sửa chuỗi gốc
5. `substring`
 cú pháp: `string.substring(start, end)`
 cắt lấy một phần của chuỗi -> tạo ra chuỗi mới, mà không sửa chuỗi gốc
6. `substr`
 cú pháp: `string.substr(start, length)`
 cắt lấy một phần của chuỗi -> tạo ra chuỗi mới, mà không sửa chuỗi gốc
 cắt 
7. `concat`
 cú pháp: `string.concat(string1, string2, ..., stringX)`
 cộng chuỗi
8. `startWith`
 cú pháp: `string.startsWith(searchValue, start)`
 kiểm tra xem chuỗi có được bắt đầu bằng chuỗi chỉ định không
9. `endWith`
 cú pháp: `string.endsWith(searchvalue, length)`
 kiểm tra xem chuỗi có được kết thúc bằng chuỗi chỉ định không
10. `toUpperCase`
 cú pháp: `string.toUpperCase()`
 chuyển toàn bộ chữ trong chuỗi thành chữ viết hoa
11. `toLowerCase`
 cú pháp: `string.toLowerCase()`
 chuyển toàn bộ chữ trong chuỗi thành chữ viết thường
12. `split`
 cú pháp: `string.split(separator, limit) `
 tạo một mảng từ 1 chuỗi, có thể tuỳ chọn phương thức tách mảng từ chuỗi
13. `repeat`
 cú pháp: `string.repeat(count)`
 lặp chuỗi
14 .`replace`
 cú pháp: `string.replace(searchValue, newValue)`
 thay thế một mẫu ( chuỗi hoặc biểu thức chính quy ) bằng 1 ( chuỗi hoặc biểu thức chính quy )khác
15. `charAt`
 cú pháp: `string.charAt(index)`
 kiểm tra ký tự ở vị trí được chỉ định là gì
 nếu chỉ số truyền vào nằm ngoài phạm vi -> trả về chuỗi rỗng
16. `trim`
 cú pháp: `string.trim()`
 loại bỏ khoảng trắng hai đầu của chuỗi
17. `length:`
 cú pháp: `string.length`
 kiểm tra độ dài của chuỗi
18. charCodeAt
 cú pháp: `string.charCodeAt(index)`
 lấy mã UTF-16 tại ký tự được chỉ định
19. `String.fromCharCode ()`
 cú pháp: `String.fromCharCode(n1, n2, ..., nX)`
 hiện ra ký tự từ mã UTF-16

### `Array Methods`

1.`push()`, `pop()`, `shift()`, `unshift()`

các methods giúp thêm hoặc xóa phần tử của mảng, tác dụng của từng method như sau:

`push()`: Thêm phần tử vào cuối mảng.
cú pháp: `array.push(item1, item2, ..., itemX)`
`unshift()`: Thêm phần tử vào đầu mảng.
cú pháp: `array.unshift(item1, item2, ..., itemX)`
`pop()`: Xóa phần tử cuối cùng trong mảng.
cú pháp: `array.pop()`
`shift()`: Xóa phần tử đầu tiên trong mảng.
cú pháp: `array.shift()`

2. `every()`
method này sẽ có tham số là 1 hàm (testMethod). 
hàm testMethod sẽ có cấu trúc như sau `function(el, index, arr)` và luôn trả về giá trị `true/false`. 

`el`: giá trị của phần tử hiện tại.
`index`: vị trí của phần tử hiện tại trong mảng.
`arr`: mảng chứa phần tử hiện tại.
method `every()` sẽ kiểm tra xem toàn bộ phần tử trong mảng có thỏa mãn testMethod không.

cú pháp: `array.every(function(currentValue, index, arr), thisValue)`

3. `some()`

method này cũng nhận vào một tham số là `testMethod`.
method này sẽ trả về `true` nếu như có ít nhất 1 phần tử trong mảng thỏa mãn `testMethod`, nếu không sẽ trả về `false`.

cú pháp: `array.some(function(value, index, arr), this)`

4.`map()`

method này sẽ nhận vào tham số là 1 `testMethod`.
`testMethod` này không nhất thiết phải trả về giá trị `true/false`. 
method này sẽ trả về một mảng mới, với giá trị được trả về từ `testMethod` của từng phần tử.

cú pháp: `array.map(function(currentValue, index, arr), thisValue)`

5.`find()`

method này cũng nhận vào tham số là 1 `testMethod` và trả về phần tử đầu tiên thỏa mãn `testMethod`, nếu không có phần tử nào thì sẽ trả về `undefined`.

cú pháp: `array.find(function(currentValue, index, arr),thisValue)`

6.`reduce()`

Đây là method dùng để tính toán từ các phần tử của mảng (theo thứ tự từ trái sang phải).

Method này sẽ nhận vào 2 tham số:

`function(total, el)`: Là một hàm tính toán, total chính là kết quả phép tính của phần tử trước còn el chính là phần tử hiện tại.
`initVaule`: Giá trị ban đầu của phép tính, được sử dụng làm total cho phép tính của phần tử đầu tiên.

cú pháp: `array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`

7.`splice()`

Method này sử dụng để xóa các phần tử trong mảng và sẽ trả về các phần tử đã xóa. Method này nhận vào hai tham số:

`index`: vị trí của phần tử đầu tiên muốn xóa.
`deleteCount`: số phần tử muốn xóa từ vị trí index.

cú pháp: `array.splice(index, howmany, item1, ....., itemX)`

8.`slice()`

Method này tương tự với hàm `substring()` chỉ khác là sử dụng với mảng. Method này nhận 2 tham số:

`start`: vị trí của phần tử đầu tiên.
`end`: vị trí của phần tử cuối cùng, nếu bạn không truyền vào thì mặc định sẽ là độ lớn của mảng.
Method này sẽ trả về mảng con từ vị trí `start` đến vị trí `end - 1` của mảng. 

cú pháp: `array.slice(start, end)`

9.`filter()`

Method này nhận vào tham số là một `testMethod` và sẽ trả về mảng chứa các giá trị thỏa mãn `testMethod`.

cú pháp: `array.filter(function(currentValue, index, arr), thisValue)`

10.`includes()`

Method này nhận vào 1 tham số là `el` và sẽ trả về `true` nếu mảng có chứa phần tử `el`, ngược lại sẽ trả về `false`.

cú pháp: `array.includes(element, start)`