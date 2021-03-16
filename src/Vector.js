class Vector {
  // Recebe uma lista de coordenadas numéricas
  constructor(coords) {
    coords = [...coords];
    const numericoCoords = []
    coords.map(item => {
      if (isNaN(parseFloat(item))) throw new Error("Coords must be numeric")
      return numericoCoords.push(parseFloat(item));
    })
    this.coords = numericoCoords;
  }

  getCoords() {
    return this.coords;
  }

  getSpace() {
    return this.coords.length;
  }

  // Retorna (v1, v2, ... vn)
  toString() {
    let vectorString = "";
    this.coords.forEach(point => {
      vectorString += String(point) + ",";
    });

    vectorString = "(" + vectorString.substring(0, vectorString.length - 1) + ")";
    return vectorString;
  }

  // Soma this com coordenadas de outro vetor, retorna resultado como vetor
  sum(vectorCoords) {
    const sumVector = new Vector(vectorCoords);
    if (this.getSpace() != sumVector.getSpace()) throw new Error("Must have the same space");
    const resultCoords = [];
    vectorCoords = sumVector.getCoords();
    vectorCoords.forEach((coord, index) => {
      resultCoords.push(coord + this.coords[index]);
    });

    return new Vector(resultCoords);

  }


  subtract(vectorCoords) {
    const sumVector = new Vector(vectorCoords);
    if (this.getSpace() != sumVector.getSpace()) throw new Error("Must have the same space");
    const resultCoords = [];
    vectorCoords = sumVector.getCoords();
    vectorCoords.forEach((coord, index) => {
      resultCoords.push(coord - this.coords[index]);
    });

    return new Vector(resultCoords);
  }


  // Retorna vetor com coordenadas inversas
  getReverse() {
    const reversesCoords = [];
    this.coords.forEach(coord => {
      reversesCoords.push(-1 * coord);
    });

    return new Vector(reversesCoords);
  }

  // Multiplicação por valor escalar
  scalarMultiplication(scalar) {
    scalar = parseFloat(scalar);
    if (isNaN(scalar)) throw new Error("Scalar must be numeric");
    const newCoords = [];
    this.coords.forEach(coord => {
      newCoords.push(scalar * coord);
    });

    return new Vector(newCoords);

  }

  // Retorna valor escalar do produto this por outro vetor
  scalarProduct(vectorCoords) {
    const sumVector = new Vector(vectorCoords);
    if (this.getSpace() != sumVector.getSpace()) throw new Error("Must have the same space");
    let result = 0;
    vectorCoords = sumVector.getCoords();
    vectorCoords.map((coord, index) => {
      return result += coord * this.coords[index];
    });

    return result;
  }

  // Calculando produto escalar com outro vetor (em R3)
  crossProduct(vectorCoords) {
    const sumVector = new Vector(vectorCoords);
    if (this.getSpace() != 3 || sumVector.getSpace() != 3) throw new Error("Must be in R3 space");
    let result = [];
    result[0] = (this.coords[1] * vectorCoords[2]) - (this.coords[2] * vectorCoords[1]);
    result[1] = (this.coords[2] * vectorCoords[0]) - (this.coords[0] * vectorCoords[2]);
    result[2] = (this.coords[1] * vectorCoords[0]) - (this.coords[0] * vectorCoords[1]);

    return new Vector(result);
  }

  // Calcula a projeção de this em outro vetor
  projectionOn(vectorCoords) {
    const vector = new Vector(vectorCoords);
    const scalar1 = this.scalarProduct(vectorCoords);
    const scalar2 = vector.scalarProduct(vectorCoords);
    const scalar = scalar1 / scalar2;
    return vector.scalarMultiplication(scalar)
  }

  // Calcula o deslise deste vetor sobre um vetor normal
  slide(normalCoords) {
    const normalVector = new Vector(normalCoords);
    const vn = this.projectionOn(normalVector.getCoords());
    return this.subtract(vn.getCoords());
  }

  // Calcula a reflexão para um vetor normal
  reflect(normalCoords) {
    const normalVector = new Vector(normalCoords);
    const vp = this.slide(normalVector.getCoords());
    return vp.subtract(normalVector.getCoords());
  }

}

module.exports = Vector