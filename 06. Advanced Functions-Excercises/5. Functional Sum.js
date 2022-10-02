let add = (function () {
    let sum = 0;
 
    return function add(number) {
        sum += number;
        add.toString = function () {
            return sum;
        };
        return add;
    }
})();

console.log(add(4)(3).toString());
