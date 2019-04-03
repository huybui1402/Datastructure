function phuongTrinhBachai(a, b, c) {
    let x = b * b - 4 * a * c
    if (x < 0) {
        return("Phương trình vô nghiệm")
    }
    else if (x == 0) {
       return x1 = x2 = -b / 2 * a
    }
    else {
        x1 = (-b + Math.sqrt(x)) / 2 * a;
        x2 = (-b - Math.sqrt(x)) / 2 * a;
    }
    return "Phuong trinh co 2 nghiem phan biet"

}
console.log(phuongTrinhBachai(3,7,3))
console.log("x1="+x1)
console.log("x2="+x2)