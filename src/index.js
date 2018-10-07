module.exports = function solveSudoku(matrix) {
  function Issolve(matrix) {
    let a, b, c, d;

    for (a = 0; a <= 8; a++){

      for (b = 0; b <= 8; b++){

        if (matrix[a][b] == 0){

          for (d = 1; d <= 9; d++){

            if (checked_to_number(matrix, a, b, d)){

              matrix[a][b] = d;
              c = Issolve(matrix);
              if (c){

                return true;
              }
              matrix[a][b] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  
  function checked_to_number(matrix, row, column, number){
    let checked_row, checked_column;

    for (checked_row = 0; checked_row <= 8; checked_row++){

      if (checked_row != row && matrix[checked_row][column] == number){

        return false;

      }
    }

    for (checked_row = 0; checked_row <= 8; checked_row++){

      if (checked_row != column && matrix[row][checked_row] == number){

        return false;

      }
    }

    let ky = Math.floor((row / 3)) * 3, kx = Math.floor((column / 3)) * 3;
    for (checked_row = 0; checked_row < 3; checked_row++){

      for (checked_column = 0; checked_column < 3; checked_column++){

        if (checked_row != row && checked_column != column && matrix[ky + checked_row][kx + checked_column] == number){

          return false;
          
        }
      }
    }
    return true;
  }
  Issolve(matrix); 
  return matrix;
}
