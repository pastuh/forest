// https : // forum.processing.org/two/discussion/10474/find-angle-between-2-points

PVector centerPoint; // the fixed red point

void setup() {
    size(1200, 600);
    background(0);
    centerPoint = new PVector(width/2, height/2);
}

void draw() {
    background(0);

    // draw arc
    fill(255);
    arc( centerPoint.x, centerPoint.y,
        430, 430,
        radians(60), radians(90) );

    // draw a simple cross at centerPoint
    crossAtPV(centerPoint);

    // show centerPoint in red
    ellipsePV(centerPoint);

    // get angle
    float angle = angleBetweenPV_PV(centerPoint, new PVector(mouseX, mouseY));

    if (angle>radians(60) &&
        angle<radians(90) &&
        (PVector.dist(new PVector(mouseX, mouseY), centerPoint ) < 430 / 2) ) {
        text ("INSIDE", width/2+108, 222);
    }//if

    // show the found angle
    fill(255, 0, 0); // red
    triangleMy(angle);
    fill(255); // white
    text(angle
        +"\n"
        +degrees(angle), 23, 23);
}

// --------------------------------------------------------------------

float angleBetweenPV_PV(PVector centerPV, PVector movingPV) {

    // calc angle : the core of the sketch

    PVector d = new PVector();

    // calc angle

    // delta
    d.x = movingPV.x - centerPV.x;
    d.y = movingPV.y - centerPV.y;
    // angle
    float angle1 = atan2(d.y, d.x);

    return angle1;
}

void triangleMy(float ang) {

    pushMatrix();

    translate(centerPoint.x, centerPoint.y);

    rotate(ang);

    // fill(255); // white shield
    triangle(60, 0,
        80, -30,
        80, 30);

    popMatrix();
}

void ellipsePV(PVector pv) {
    fill(255, 0, 0); // red
    ellipse(pv.x, pv.y, 10, 10);
}

void crossAtPV(PVector pv) {
    stroke(255);
    line(pv.x, 0, pv.x, height);
    line(0, pv.y, width, pv.y);
}