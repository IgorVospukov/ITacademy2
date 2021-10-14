function deleteVolwes(str) {
  return str.match(/[аоуэыяеёюя]/gi).length;
}
console.log(deleteVolwes('вася вася вася вася вася'));
