function tinhtong(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw Error('a, b phai la so')
    }

    return a + b
}

console.log(tinhtong(1, 2))
console.log(tinhtong('111', 2))