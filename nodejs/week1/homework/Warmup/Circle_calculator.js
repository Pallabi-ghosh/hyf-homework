function circle(radius) {
    this.radius = radius;
    // getArea method
    this.area = function() {
        return Math.PI * this.radius * this.radius;
    };
    // getDiameter method
    this.getDiameter = function() {
        return 2 * Math.PI * this.radius;
    };

}
var c = new circle(3);
var circumferenceOfCircle = 2 * Math.PI * ('Area =', c.area().toFixed(2));
console.log('Area =', c.area().toFixed(2));
console.log('Diameter =', c.getDiameter().toFixed(2));
console.log("Circumference of circle is: " + circumferenceOfCircle);