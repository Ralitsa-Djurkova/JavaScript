function input(speed, area){

  let overLimit = 0;
  let allowedSpeed = 0;
  
  if(area === 'motorway'){
    allowedSpeed = 130;
    overLimit = speed - 130;
  } else if(area === 'interstate'){
    allowedSpeed = 90;
    overLimit = speed - 90;
  }else if(area === 'city'){
    allowedSpeed = 50;
    overLimit = speed - 50;
  }else if(area === 'residential'){
    allowedSpeed = 20;
    overLimit = speed - 20;
  }
 
  if(overLimit <= 0){
    console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`)
  }else if(overLimit > 0 && overLimit <= 20){
    console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${allowedSpeed} - speeding`);
  }else if(overLimit > 20 && overLimit <= 40){
    console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${allowedSpeed} - excessive speeding`);
  }else{
    console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${allowedSpeed} - reckless driving`);
  }
  
}

input(120, 'interstate');



