// Code iteration on Daniel Shiffman Graphic Amplitude
// Code for: https://youtu.be/Pn1g1wjxl_0
// Contributor: Jae Pearl github/jaepearl95

export default function sketch(p) {
  const globe2 = [];
  let r2 = (p.windowWidth < 600) ? 150 : 175;
  // let total2 = (p.windowWidth < 600) ? 150 : 175;
  let total2 = 100;
  let angleX = 0;
  let angleY = 0;

  p.setup = () => {
    let width = (p.windowWidth < 600) ? p.windowWidth - 64 : 500;
    p.createCanvas(width, 500, p.WEBGL);
    p.noFill();
    p.strokeWeight(2);
    p.stroke(255);

    for (let k = 0; k < total2 + 1; k++) {
      globe2[k] = [];
      const lat = p.map(k, 0, total2, 0, p.TWO_PI);
      for (let j = 0; j < total2 + 1; j++) {
        const lon = p.map(j, 0, total2, 0, p.TWO_PI);
        const x = r2 * p.sin(lat) * p.cos(lon);
        const y = r2 * p.sin(lat) * p.sin(lon);
        const z = r2 * p.cos(lat) * p.cos(lon) * p.cos(lat);
        globe2[k][j] = p.createVector(x, y, z);
      }
    }
  }

  p.windowResized = () => {
    let width = (p.windowWidth < 600) ? p.windowWidth - 64 : 500;
    p.resizeCanvas(width, 500, p.WEBGL);

    r2 = (p.windowWidth < 600) ? 150 : 175;
    // total2 = (p.windowWidth < 600) ? 150 : 175;

    for (let k = 0; k < total2 + 1; k++) {
      globe2[k] = [];
      const lat = p.map(k, 0, total2, 0, p.TWO_PI);
      for (let j = 0; j < total2 + 1; j++) {
        const lon = p.map(j, 0, total2, 0, p.TWO_PI);
        const x = r2 * p.sin(lat) * p.cos(lon);
        const y = r2 * p.sin(lat) * p.sin(lon);
        const z = r2 * p.cos(lat) * p.cos(lon) * p.cos(lat);
        globe2[k][j] = p.createVector(x, y, z);
      }
    }
  }

  p.draw = () => {
    p.background(0);
    p.rotateX(angleX);
    p.rotateY(angleY);

    for (let i = 0; i < total2; i++) {
      p.beginShape(p.POINTS);
      for (let j = 0; j < total2 + 1; j++) {
        const v1 = globe2[i][j];
        p.vertex(v1.x, v1.y, v1.z);
      }
      p.endShape();
    }
    angleX += 0.005;
    angleY += 0.006;
  }
}