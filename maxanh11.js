function baSo(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number'|| typeof c !== 'number') {
        throw Error('a, b phai la so')
    }
    return (a - b) * c
}
console.log(baSo(1,4,2))