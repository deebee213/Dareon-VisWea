var weatherData;
var mapImage;
var myFont;
var centerX;
var centerY;
//selects the location of the circle
var selectionX;
var selectionY;
var mapLocationX = 50;
var mapLocationY = 190;
var mapSizeX = 540;
var mapSizeY = 360;

function preload(){
  myFont = loadFont("TCB_____.ttf");
  mapImage = loadImage("Equirectangular_projection_SW.jpg");
  
  
}

function setup() {
  createCanvas(1080,720);
  angleMode(DEGREES);
  
  textFont(myFont);
  textSize(24);
  textAlign(CENTER);
  
  
  centerX = width/2;
  centerY = height/2;
  
  loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Otoineppu,Japan&appid=4cf826e5b55ab126365d97b06be5e0c5&units=imperial", gotData);
  
}

function gotData(data){
  //this callback function executes once the json has arrived
  //takes the json in the data argument and dumps it in the weatherData variable
  weatherData = data;
}

function draw() {
  background(204,255,255);
  

  /*var time = frameCount * 0.001;
  var up = map(noise(time),0,1,0,height);
  */
  
  strokeWeight(3);
  stroke(0)
  fill(255,255,0);
  text("Current Weather of Today",500,50)
  image(mapImage,mapLocationX,mapLocationY,mapSizeX,mapSizeY);
  //mapImage = (mapLocationX,mapSizeX,mapLocationY,mapSizeY);
  
  
  ellipse(selectionX,selectionY,10,10);
  
    
  //if the mouse is over the map
  if(mouseX > mapLocationX &&
    mouseX < (mapLocationX + mapSizeX) &&
    mouseY > mapLocationY &&
    mouseY < (mapLocationY + mapSizeY)
    ){
    //draw the crosshair lines
    line(mouseX,mapLocationY,mouseX,mapLocationY + mapSizeY);
    line(mapLocationX,mouseY,mapLocationX + mapSizeX,mouseY);
    textSize(20);
    //noStroke();
    fill(255,255,255);
    //draw the lat and long coordinates
    text(floor(map(mouseY,mapLocationY,mapLocationY + mapSizeY,90,-90)),mapSizeX+30,mouseY - 4);
    text(floor(map(mouseX,mapLocationX,mapLocationX + mapSizeX,-180,180)),mouseX - 20,mapLocationY + 20);
    
    }
  
    
  
  //if weatherData is undefined, then this code will not execute undefined = FALSE anything
  if(weatherData){
    noStroke
    fill(135,206,250);
    //City Name
    text("City Name:  " +weatherData.name,width*.8,100);
    //Country Code
    text("Country Code:  " +weatherData.sys.country,width*.8,121);
    
    //temperature
    text("Current Temperature:  " +weatherData.main.temp + " °F",width*.8,200);
    
    //Humidity
    text("Humidity:  " +weatherData.main.humidity + "%",width*.8,250);
    
    //wind speed
    text("Wind Speed:  " +weatherData.wind.speed +" mph",width*.8,220);
    
    //Latitude
    text("Latitude:  " +weatherData.coord.lat,width*.8,140);
    
    //Longitude
    text("Longitude:  " +weatherData.coord.lon,width*.8,160);
    
    windspeed(weatherData.wind.speed);
    temperature(weatherData.main.temp);
    //humidity(weatherData.main.humidity);
  }
  
}



function mousePressed(){
  if(mouseX > mapLocationX &&
    mouseX <(mapLocationX + mapSizeX) &&
    mouseY > mapLocationY &&
    mouseY < (mapLocationY + mapSizeY)
    ){
      selectionX = mouseX;
      selectionY = mouseY;
      //grab the JSON based on the new selection
      var lon = map(selectionX,mapLocationX,mapLocationX + mapSizeX, -180,180);
      var lat = map(selectionY,mapLocationY,mapLocationY + mapSizeY, 90,-90);
      var start = "http://api.openweathermap.org/data/2.5/weather?lat="
      var end = "&appid=586c247ad8d56d6dce5eaa3184b383e1&units=imperial"
      var url = start + lat + "&lon=" + lon + end;
      loadJSON(url, gotData);
      //println(mousePressed);
    }
}

function keyTyped() {
  switch (key) {
    case "1":
      loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Jakarta,Indonesia&appid=4cf826e5b55ab126365d97b06be5e0c5&units=imperial", gotData);
      break;
    case "2":
      loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Athens,Greece&appid=4cf826e5b55ab126365d97b06be5e0c5&units=imperial", gotData);
      break;
    case "3":
      loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Otoineppu,Japan&appid=4cf826e5b55ab126365d97b06be5e0c5&units=imperial", gotData);
      break;
  }
}
