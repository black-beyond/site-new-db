// Code iteration on Daniel Shiffman Graphic Amplitude
// Code for: https://youtu.be/Pn1g1wjxl_0
// Contributor: Jae Pearl github/jaepearl95

const globe2 = [];
const r2 = 100;
const total2 = 100;
let angleX = 0;
let angleY = 0;
// let yoff = 0.0;

function setup() {
  createCanvas(500, 500, WEBGL);
  noFill();
  strokeWeight(2);
  stroke(200);

  for (let k = 0; k < total2 + 1; k++) {
    globe2[k] = [];
    const lat = map(k, 0, total2, 0, TWO_PI);
    for (let j = 0; j < total2 + 1; j++) {
      const lon = map(j, 0, total2, 0,TWO_PI);
      const x = r2 * sin(lat) * cos(lon);
      const y = r2 * sin(lat) * sin(lon);
      const z = r2 * cos(lat) * cos(lon) * cos(lat);
      globe2[k][j] = createVector(x, y, z);
    }
  }
}

function draw() {
  background(0);
  rotateX(angleX);
  rotateY(angleY);

  for (let i = 0; i < total2; i++) {
    beginShape(POINTS);
    for (let j = 0; j < total2 + 1; j++) {
      const v1 = globe2[i][j];
      vertex(v1.x, v1.y, v1.z);
      // const v2 = globe[i + 1][j];
      // vertex(10, 20, 30);
      
      

    }
    endShape();
    
    
  }
  angleX += 0.005;
  
  angleY += 0.006;
  // 
}