//access control system that gives user rights to read, edit, runs and delete files, by using bitwise operators

const acc = Object.freeze({
  none: 0,
  read: 1,
  edit: 2,
  run: 4,
  del: 8
});

let msg;
let myAcc = acc.run;
//acc.read | acc.edit;

if (myAcc & acc.read) {
  msg = 'you can only read the file';
} else if (myAcc & acc.edit) {
  msg = 'you can read and edit the file';
} else if (myAcc & acc.run) {
  msg = 'you can execute the file';
} else if (myAcc & acc.del) {
  msg = 'you have admin rights';
} else {
  msg = 'access denied';
}

console.log(msg);

let binaryText = myAcc.toString(2);
console.log('binary code for your rights is: ' + binaryText);
