function Main(input) {
  input = input.split('\n');
  input.pop();
  for (let i = input.length - 1; i > 0; i--) {
    console.log(input[i]);
  }
}

// let input = `3
// Takahashi
// Aoki
// Snuke
// `;
// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
