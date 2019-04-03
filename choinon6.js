function tinhTien(h, tien) {
    let tongtien;
    if (h >= 40) {
        tongtien = h * tien * 2;
    } else {
        tongtien = h * tien;
    }
    return tongtien;
}
console.log(tinhTien(41, 6))