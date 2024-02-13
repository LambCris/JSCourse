// 1 

function getTimeOfDay(time){
  if( time >= 8 && time <=12 ){
    return 'сейчас утро';
  }else if( time >12 && time <=17){
    return 'сейчас день';
  }else if (time >17 && time <=24){
    return 'сейчас вечер';
  }else{
    return 'еще ночь';
  }
}
console.log(getTimeOfDay(13))


// 2 

for ( let i=0; i<=10; i++){
  console.log(i)
}

for ( let i=0; i<=10; i++){
  if (i === 7) break;
  console.log(i);
}

let i = 0
while(i <= 20){
  if(i % 2 ==0) {
    if( i % 5 !==0){
      console.log(i);
    }
  }
  i++;
}


// 3

function formatPhoneNumber(phoneNumber){

  for (let i =0; i <= phoneNumber.length; i++){
    if( isNaN([i])){
      return `only numbers are allowed`;
    }
  }

  let result = 0;

  let brackets = phoneNumber.slice(0,3);
  let separator = phoneNumber.slice(3,6);
  let lastNumbers = phoneNumber.slice(6,`${phoneNumber.length}`);
  result = `(${brackets})-${separator}-${lastNumbers}`;
  return result;

}
console.log(formatPhoneNumber('1234567890'))



