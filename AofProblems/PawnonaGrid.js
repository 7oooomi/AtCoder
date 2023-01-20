function Main(input) {
  input = input.split('\n');
  const arr = input.shift();

  let count = 0;
  for (const i of input) {
    for (const j of i) {
      if (j == '#') {
        count++;
      }
    }
  }
  console.log(count);
}
// let input = `3 5
// #....
// .....
// .##..`;
// Main(input);
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
