
let arr = ['|   ','/   ','-   ','\\   ','|   ','/   ','-   ','\\   ','|   '];
let i = 100;
for (let j = 0; j < arr.length; j++){
  setTimeout(() => {
    process.stdout.write(`\r${arr[j]}`);
    if (j === arr.length -1){
      process.stdout.write('\n');
    }}, i);
  i += 200;
};