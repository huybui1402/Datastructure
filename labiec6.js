// function kiem_tra_snt(n)
// {
//     // Biến cờ hiệu
//     var flag = true;
 
//     // Nếu n bé hơn 2 tức là không phải số nguyên tố
//     if (n < 2){
//         flag = false;
//     }
//     else if (n == 2){
//         flag = true;
//     }
//     else if (n % 2 == 0){
//       flag = false;
//     }
//     else{
//         // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
//         for (var i = 3; i < n-1; i+=2)
//         {
//             if (n % i == 0){
//                 flag = false;
                
//             }
//         }
//     }
 
//     // Kiểm tra biến flag
//     if (flag == true){
//         document.write(n + " là số nguyên tố <br/>");
//     }
//     else{
//         document.write(n + " không phải là số nguyên tố <br/>");
//     }
// }
// console.log(kiem_tra_snt(4))
// console.log(kiem_tra_snt(-3))
// console.log(kiem_tra_snt(5))
// console.log(kiem_tra_snt(6))
function soNguyenTo(n){
    if(n==0 || n==1){
        return false
    }
    for(i=2;i<=n-1;i++){
        
    }
}