function addSquare(val1, val2) {

    const squareOfVal1 = square(val1);
    const squareOfVal2 = square(val2);

    function square(num) {
        return num * num;
    }

    return squareOfVal1 + squareOfVal2;
}

console.log(addSquare(4, 3)); 