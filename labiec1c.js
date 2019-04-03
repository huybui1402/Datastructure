function soChan(arr) {
    let chuoi = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            chuoi.push(arr[i]);

        }

    }
    return chuoi
}
console.log(soChan(5, 10))