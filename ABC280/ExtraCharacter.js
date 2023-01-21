function Main(input) {
  input = input.trim().split('\n');
  let a = input[0];
  let b = input[1];

  for (let i = 0; i < b.length; i++) {
    if (a[i] !== b[i]) {
      console.log(i + 1);
      break;
    }
  }
}
// let input = `vvwvw
// vvvwvw
// `;
// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
