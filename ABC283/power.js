function Main(input) {
  input = input.split(' ');
  let num = Number(input[0]) ** Number(input[1]);
  console.log(num);
}

// let input = `5 5`;
// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
