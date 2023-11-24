const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];
numbers.filter(function (item) {
    for (let i = 0; i < item.length; i++) {
        if (item[i] % 2 !== 0) {
            delete item[i]
        }
    }
})
console.log(numbers)