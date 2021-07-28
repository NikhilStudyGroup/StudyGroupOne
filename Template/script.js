console.log("ewrwert");

function flatenigArray(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      //[3,[4,5],7[8,[9]]]
      flatenigArray(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

flatenigArray([1, 2, [3, [4, 5], 7, [8, [9], [10, 11, 12, [12, 23]]]]]);
