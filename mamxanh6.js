function tinhDienTichHinhTron(bankinh){
    if(bankinh < 0){
        throw Error('Ban kinh phai la so nguyen duong');
    }
    let dientich = 3.14 * bankinh * bankinh;
    return dientich;
}

console.log('==>',tinhDienTichHinhTron(121))
console.log("------",tinhDienTichHinhTron(1))