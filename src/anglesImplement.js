const Vector = require("./Vector");

const vector1 = new Vector([2, 1, 4]);
const vector2 = new Vector([3, 0, 4]);

const scalarAngle = vector1.angleWithScalar(vector2.getCoords());
const crossAngle = vector1.angleWithCrossProduct(vector2.getCoords());

console.log(scalarAngle);
console.log(crossAngle);