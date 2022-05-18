function compareArrays( arr1, arr2 ) {
  let result;
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length != arr2.length) {
    return false;
  }
  return arr1.every((v,i) => v === arr2[i]);
}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

  
  function advancedFilter(arr) {
    let resultArr = arr.filter(item => item > 0)
      .filter(item => item % 3 === 0)
      .map(item => item * 10);
  
    return resultArr; // array
  }