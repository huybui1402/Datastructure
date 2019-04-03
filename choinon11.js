function giai_pt_bac_nhat(a, b)
{
    if (a == 0 && b == 0){
        return'Phương trình vô số nghiệm';
    }
    
    else if (a == 0 && b != 0){
        return"Phương trình vô nghiệm";
    }
    else {
        return 'Phương trình có nghiệm x = ' + (-b/a);
    }
}
console.log(giai_pt_bac_nhat(-2,2));