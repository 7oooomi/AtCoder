function Main(input) {
  input = input.split('\n');
  const a = parseInt(input[0], 10);
  const b = parseInt(input[1], 10);
  const c = parseInt(input[2], 10);
  const x = parseInt(input[3], 10);

  let count = 0;
  for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
      for (let k = 0; k <= c; k++) {
        if (i * 500 + j * 100 + k * 50 === x) {
          count++;
        }
      }
    }
  }
  console.log(count);
}

// let input = `2
// 2
// 2
// 100
// `;
// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
