function table(){

let n,i,tarr = [],ntarr = [];
    n = document.getElementById("input").value;
    //n = Number.parseInt(n);
for(i=0;i<=10;i++){

   tarr[i] = n + " x " + i + "  =  " +  n * i + "<br>";// storring in array
   
ntarr = tarr.join("");// removing commas

document.getElementById("out").innerHTML=ntarr;//displaying

}}