function soSanhBaSo(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw Error('a phai la so')
    }
    if (a >= b && a >= c) {
        return a
    }
    if (c >= b && c >= a) {
        return c
    }
    return b
}

console.log(soSanhBaSo(4, 5, 6))
console.log(soSanhBaSo(4, 6, 5))
console.log(soSanhBaSo(6, 5, 5))