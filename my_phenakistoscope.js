const SLICE_COUNT = 15;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("heart_circle" , "png");
  pScope.load_image("cat1" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 152, 206, 235);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(cat1);
  layer1.mode( SWIRL(8) );
  layer1.set_boundary( 20, 600 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
}

function cat1(x, y, animation, pScope){
  pScope.draw_image("cat1",x,y);
  scale()
  scale(animation.wave(2));

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth

}

function squares(x, y, animation, pScope){

  pScope.draw_image("heart_circle",x,y);
  scale(0.5,0.5)

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(107, 86, 61)
  arc(x,y,400,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-10,300-animation.wave()*50,20,20) // .wave is a cosine wave btw

  
 
}