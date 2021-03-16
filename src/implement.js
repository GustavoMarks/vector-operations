const Vector = require("./Vector")

const vector1 = new Vector([1, 2, 3]);
const vector2 = new Vector([-7, 5, -1])
const reverse = vector1.getReverse();
const sum = vector1.sum(vector2.getCoords());
const multScalar = vector1.scalarMultiplication(3);
const scalarProduct = vector1.scalarProduct(multScalar.getCoords());
const crossProduct = vector1.crossProduct(vector2.getCoords());

const vector3 = new Vector([2, 1]);
const vector4 = new Vector([3, 0]);
const projection = vector3.projectionOn(vector4.getCoords());
const slide = vector3.slide(vector4.getCoords());
const reflect = vector3.reflect(vector4.getCoords());


console.log(vector1.toString());
console.log(reverse.toString());
console.log(sum.toString());
console.log(multScalar.toString());
console.log(scalarProduct);
console.log(crossProduct.toString());
console.log(projection.toString());
console.log(slide.toString());
console.log(reflect.toString())