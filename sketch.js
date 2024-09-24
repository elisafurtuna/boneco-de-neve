function setup() {
  createCanvas(400, 400);
  background("rgb(209,196,196)");
}



function draw() {
  fill("white")
  ellipse(200, 150, 70, 70)
  ellipse(200, 220, 90, 90)
  ellipse(200, 305, 120, 120)
  fill("black")
  circle(190, 140, 10)
  circle(210, 140, 10)
  fill("orange")
  triangle(200, 150, 200, 160, 210, 155)
  fill("black")
  circle(200, 200, 20)
  circle(200, 230, 20)
  circle(200, 270, 20)
  line(155, 200, 100, 100)
  line(245, 200, 300, 100)
  
}