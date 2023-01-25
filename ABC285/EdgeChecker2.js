function Main(input) {
  input = input.split('\n');
  AB = input[0].split(' ');
  a = parseInt(AB[0]);
  b = parseInt(AB[1]);

  if (a * 2 === b || a * 2 + 1 === b) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

// let input = `14 15`;
// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
