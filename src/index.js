module.exports = function solveSudoku(matrix) {
  // your solution
  let check = matrix;
  if (sudoku(matrix)){
    check = matrix;
  }
  return check;
}

  let zeros_place = [];
  //let value = [];

    function findZero(matrix, zeros_place) {
      for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
          if(matrix[i][j] === 0){
            zeros_place[0] = i;
            zeros_place[1] = j;
            return true;
          }
        }
      }
      return false;
    }


    function condition_row(matrix,zero_0, value) {
      for (var k = 0; k < 9; k++) {
        if (matrix[zero_0][k] === value) {
          return false;
        }
      }
      return true;
    }

    function condition_col(matrix,zero_1, value) {
      for (var k = 0; k < 9; k++) {
        if (matrix[k][zero_1] === value) {
          return false;
        }
      }
      return true;
    }

    function condition_3(matrix,zero_0,zero_1, value) {
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          if (matrix[k+zero_0][l+zero_1] === value) {
            return false;
          }
        }
      }
      return true;
    }

    function sudoku(matrix) {
      if(!findZero(matrix, zeros_place)){
		    return true;
	    }
      let zero_0 = zeros_place[0];
      let zero_1 = zeros_place[1];
      for (var value = 1; value <= 9; value++) {
        if (condition_row(matrix,zero_0, value) && condition_col(matrix,zero_1, value) && condition_3(matrix,zero_0 - zero_0 % 3,zero_1 - zero_1 % 3, value)) {
          matrix[zero_0][zero_1] = value;
          if(sudoku(matrix)){
  			    return true;
  		    }
          matrix[zero_0][zero_1] = 0;
        }
      }
      return false;
    }
