const arr = [1, 1, 4, 5, 4, 6, 7, 3, 5];

const findRepeated = (arr) => {
    newArr = [];
  for (let i = 0; i < arr.length; i++) {

    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }

    return newArr;
  }
};

console.log(findRepeated(arr));
