function tinhDien(tinhdiem){
    if(typeof tinhdiem !== 'number'){
        throw Error('tinhdiem phai la so')
    }
    if(tinhdiem >=9){
        document.write("xuat sac");
    }
    else if(tinhdiem>=8 && tinhdiem<9){
        document.write("hoc sinh gioi")
    }
    else if(tinhdiem>=7 && tinnhdiem<8){
        document.write("hoc sinh kha");
    }
    else if(tinhdiem>=6 && tinhdiem <7){
        document.write("hoc sinh tb kha")
    }
    else{
        document.write("hoc sinh yeu")
    }
}
console.log(tinhDien(6.1))