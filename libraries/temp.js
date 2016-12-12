function temperature(temp){
  
  rectMode (CENTER);
  angleMode(RADIANS);
  translate(width*.9, height/2);
  var tempMap = map(temp,0,100,0.2,3);
  var tempMapR = map(temp,0,100,0,255);
  var tempMapB = map(temp,0,100,255,0);
  
	for (var i = 0; i < 10; i++) {
		push();
		rotate(TWO_PI * i / 8);
		var tx = 50 * noise(0.1*frameCount*tempMap);
		translate(tx, 0);
		stroke(tempMapR,0,tempMapB);
	  triangle(25, 25, 20, 20);
		for (var j = 5; j < 6; j++) {
			push();
			rotate(TWO_PI * j / 6);
			var rx = 30 * noise(0.001*frameCount + 10);
			triangle(rx, 0, 4, 8);
			pop();
		}		
		translate()
		pop();
	}
}
