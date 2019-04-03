
function soSanhHaiSo1(a, b) {
    if (a >= b) {
        return a
    }
    return b
}


function soSanhHaiSo2(a, b) {
    return a >= b ? a : b;
}

console.log(soSanhHaiSo1(6, 7))
console.log(soSanhHaiSo2(6, 7))