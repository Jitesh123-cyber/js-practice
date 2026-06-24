function leapYear(year){

   if((year%4 == 0 && year%100 !== 0) || (year%400 == 0)){
    console.log("the year is a leap year");
   }
   else{
    console.log("the year is not a leap year");
   }

}

console.log(leapYear(2021));


function fact(n){
    let result = 1;

    if(n<0){
     console.log("factorial is not defined for negative values");
    }

    else{

    for(let i = 1; i<= n; i++){
         result = result*i;
    }
    return result;

}}

console.log(fact(5));

function ReverseAstring(str){
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(ReverseAstring("Hello World!"));


























