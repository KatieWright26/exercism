//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    const matrix = this.matrix.split("\n").map(m => m.split(' ').map(Number));
    Object.defineProperty(this, "rows", { value: matrix });
    return matrix
  }


  get columns() {
    const mapRowstoColumns = this.rows[0].map((_, i) =>
      this.rows.map(row => row[i]));
    Object.defineProperty(this, "columns", { value: mapRowstoColumns });
    return mapRowstoColumns;
  }
}
