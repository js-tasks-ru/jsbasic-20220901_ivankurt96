function getMinMax(str) {
str = str.split(' ');
str = str.filter (Number);
let result = {
  'min': Math.min.apply (null, str),
  'max': Math.max.apply (null, str),
}
 return (result);
}