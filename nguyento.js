let number=parseInt(prompt("Nhap so luong nguyen to dau tien"));
let count=0;
function checkSNT(k){
    if(k<2){
        return 0; //so nguyen k<2 ko phai so nguyen to
    }
    //check so nguyen to khi k>=2
    let i;
    for(i=2; i<=Math.sqrt(k); i++){
        if(k%i==0){
            return 0;
        }
    }
    return 1;
}
let i=2;
while(count<number){
    if(checkSNT(i)){
        document.write(i+"<br>");
        count++;
    }
    i++;
}