function humidity(humidityCover){
  
  
  
  for(var i = 0;i < 60;i++){
    //connects the humidity cover probability to the actual value
    if(random(100) < humidityCover){
    //randomSeed stabilized random numbers
    randomSeed(i*300);
    noStroke();
    fill((255,255,0),random(100));
    ellipse(10,150,50,50);
    }
  }
}