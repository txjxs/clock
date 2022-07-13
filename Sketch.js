function setup(){
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
}


function draw(){
    background('#2C3639');
    translate(windowWidth/2,windowHeight/2);
    rotate(-90);
    let hr = hour();
    let mn = minute();
    let sc = second();


    strokeWeight(4);
    // seconds
    stroke('#3F4E4F');
    noFill();
    let end_sc = map(sc,0,60, 0, 360);
    arc(0,0,400,400,0,end_sc);
    push();
    rotate(end_sc);
    stroke('#3F4E4F');
    line(0,0,100,0);
    pop();
    //Minutes
    stroke('#A27B5C');
    let end_mn = map(mn,0,60, 0, 360);
    arc(0,0,380,380,0,end_mn);
    push();
    rotate(end_mn);
    stroke('A27B5C');
    line(0,0,90,0);
    pop();

    //hour
    stroke('#DCD7C9');
    let end_hr = map(hr % 12,0,12, 0, 360);
    arc(0,0,360,360,0,end_hr);
    push();
    rotate(end_hr);
    stroke('#DCD7C9');
    line(0,0,60,0);
    pop();




    // fill(255);
    // noStroke();
    // text(hr+":"+mn+":"+sc , 10,200);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }