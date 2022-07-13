function setup(){
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
}


function draw(){
    background('rgb(214, 28, 78)');
    translate(windowWidth/2,windowHeight/2);
    rotate(-90);
    let hr = hour();
    let mn = minute();
    let sc = second();


    strokeWeight(4);
    
    stroke('rgb(214, 28, 78)');
    noFill();
    let end_sc = map(sc,0,60, 0, 360);
    arc(0,0,300,300,0,end_sc);
    push();
    rotate(end_sc);
    stroke('rgb(41, 52, 98)');
    line(0,0,100,0);
    pop();
    stroke('rgb(41, 52, 98)');
    let end_mn = map(mn,0,60, 0, 360);
    arc(0,0,280,280,0,end_mn);
    push();
    rotate(end_mn);
    stroke('rgb(254, 177, 57)');
    line(0,0,100,0);
    pop();
    stroke('rgb(255, 248, 10)');
    let end_hr = map(hr % 12,0,12, 0, 360);
    arc(0,0,260,260,0,end_hr);
    push();
    rotate(end_hr);
    stroke('rgb(255, 248, 10)');
    line(0,0,100,0);
    pop();




    // fill(255);
    // noStroke();
    // text(hr+":"+mn+":"+sc , 10,200);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }