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