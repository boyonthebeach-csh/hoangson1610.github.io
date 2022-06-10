``` javascript 
    var multiply = function(num1, num2) {
    
    num1 = Number(num1);
    num2 = Number(num2);
  
    if (num1 <= 0 || num2 <= 0) {
        return 0;
    }
    
    let result;
    
    if (1 <= num1.length <= 200 && 
        1 <= num2.length <= 200 &&
        num1 > 0 && 
        num2 > 0 &&
        num1[0] != 0 &&
        num2[0] != 0) {
            result = num1*num2;
            result = result.toString();
            return result;
    } else {
        return 0;
      }
};
```