function windspeed(windspeedCover){
  
  
  for(var i = 0;i < 60;i++){
    //connects the humidity cover probability to the actual value
    if(random(100) < windspeedCover){
    //randomSeed stabilized random numbers
    randomSeed(i*300);
    stroke(0,204,102);
    fill((153,255,51),random(100));
    ellipse(900,440,100,50);
    }
  }
}