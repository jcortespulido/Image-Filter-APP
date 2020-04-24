let iniImage;

function doUpload(){
  let canva = document.getElementById("canva");
  let imageFile = document.getElementById("fileImage");
  iniImage = new SimpleImage(imageFile);
  //iniImage.setSize(800px,400px);
  iniImage.drawTo(canva);
}

function doClear(){
  let canva = document.getElementById("canva");
  let ctx = canva.getContext("2d");
  iniImage = null;
  ctx.clearRect(0,0,canva.width,canva.height);
}

function doNormal(){
  let image = new SimpleImage(iniImage);
  image.drawTo(canva);
}

function doGray(){
  let image = new SimpleImage(iniImage);
  for (pixel of image.values()){
    let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  image.drawTo(canva); 
}

function doRed(){
  let image = new SimpleImage(iniImage);
  for (pixel of image.values()){
    pixel.setRed(255);
  }
  image.drawTo(canva); 
}

function doGreen(){
  let image = new SimpleImage(iniImage);
  for (pixel of image.values()){
    pixel.setGreen(255);
  }
  image.drawTo(canva); 
}

function doBlue(){
  let image = new SimpleImage(iniImage);
  for (pixel of image.values()){
    pixel.setBlue(255);
  }
  image.drawTo(canva); 
}

function doVRainbow(){
  let image = new SimpleImage(iniImage);
  let width = image.getWidth();
  for (pixel of image.values()){
    let x = pixel.getX();
    if(x <= width/7) { pixel.setRed(255); }
    if(x > width/7 && x<= (width/7)*2) {pixel.setRed(255); pixel.setGreen(127);}
    if(x > (width/7)*2 && x<= (width/7)*3) {pixel.setRed(255); pixel.setGreen(255);}
    if(x > (width/7)*3 && x<= (width/7)*4) {pixel.setGreen(255);}
    if(x > (width/7)*4 && x<= (width/7)*5) {pixel.setBlue(255);}
    if(x > (width/7)*5 && x<= (width/7)*6) {pixel.setRed(75); pixel.setBlue(130);}
    if(x > (width/7)*6 && x<= width) {pixel.setRed(143); pixel.setBlue(255);}
  }
  image.drawTo(canva);
}

function doHRainbow(){
  let image = new SimpleImage(iniImage);
  let height = image.getHeight();
  for (pixel of image.values()){
    let y = pixel.getY();
    if(y <= height/7) { pixel.setRed(255); }
    if(y > height/7 && y<= (height/7)*2) {pixel.setRed(255); pixel.setGreen(127);}
    if(y > (height/7)*2 && y<= (height/7)*3) {pixel.setRed(255); pixel.setGreen(255);}
    if(y > (height/7)*3 && y<= (height/7)*4) {pixel.setGreen(255);}
    if(y > (height/7)*4 && y<= (height/7)*5) {pixel.setBlue(255);}
    if(y > (height/7)*5 && y<= (height/7)*6) {pixel.setRed(75); pixel.setBlue(130);}
    if(y > (height/7)*6 && y<= height) {pixel.setRed(143); pixel.setBlue(255);}
  }
  image.drawTo(canva);
}