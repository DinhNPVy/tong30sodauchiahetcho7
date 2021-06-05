let count = 0, sum = 0, tmp = "";
let i = 1;

while(i){
    if(i % 7 == 0){
    tmp += i + " ";
        console.log(tmp);
        sum += i;
        count++;
        if(count == 30) break;
   
    }
    i++;
}
document.write(tmp + "<br>");
document.write("Tổng bằng "+ sum);