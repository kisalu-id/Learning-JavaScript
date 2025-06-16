//Juuuust warming up my brain so it doesn't pull a muscle later 


const calculateVolume = function(length, width, height) {
  if (length <= 0 || width <= 0 || height <= 0) {
    return "All dimensions must be positive numbers!";
  }
  
  let volume = length * width * height;
  
  volume = volume.toFixed(2);
  
  return `Volume of a box ${length} x ${width} x ${height} = ${volume}`;
};


console.log(calculateVolume(3, 4, 5));
console.log(calculateVolume(2, 2, 2));
console.log(calculateVolume(1, 4, 2));
console.log(calculateVolume(9, 8, 7));
console.log(calculateVolume(-1, 4, 2));