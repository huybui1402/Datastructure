function haiSo(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw Error('a, b phai la so')
    }
    return a + b + a * b
}
console.log(haiSo(10, 20))