function inSo(a, b) {
    var inso =[]
    for (i = a; i <= b; i++) {
        inso += i+"</br>"
    }
    return inso
}
document.write(inSo(5,10))