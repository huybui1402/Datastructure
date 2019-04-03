function tamGiacVuong(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof b !== 'number') {
        throw Error('a, b phai so ')
    }
    else if (c * c == a * a + b * b) {
        return "yes"
    }
    else{
        return "no"
    }

}
console.log(tamGiacVuong(3,4,5))