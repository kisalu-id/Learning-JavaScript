//access control system that gives user rights to read, edit, runs and delete files, by using bitwise operators
const acc = Object.freeze({
  none: 1,
  read: 2,
  edit: 4,
  run: 8,
  del: 16
});

let myAcc = acc.edit | acc. run | acc.del;
//acc.read | acc.edit;
if (myAcc & acc.none) {
  console.log('Access denied');
  
} else {
  console.log('Your permissions are to');
  if (myAcc & acc.read) {
    console.log('read');
  } if (myAcc & acc.edit) {
    console.log('edit');
  } if (myAcc & acc.run) {
    console.log('execute');
  } if (myAcc & acc.del) {
    console.log('delete');
  }
console.log('the file.');
}

let binaryText = myAcc.toString(2);
console.log('binary code for your rights is: ' + binaryText);
