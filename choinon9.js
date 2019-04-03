function chanLe(a){
    if(typeof a !== 'number'){
        throw Error('a phai la so')
    }
    else if(a /2){
        return "la so chan"
    }
    else if(a == 0){
        return "a bang khong"
    }
    else if(a<0){
        return "a la so am"
    }
    else{
        return "la so le"
    }
}
console.log(chanLe(4))