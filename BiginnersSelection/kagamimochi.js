function Main(input) {
  input = input.split('\n');
  let arr = input.shift();
  const smallSize = [...new Set(input)];
  console.log(smallSize.length - 1);
}
// let input = `7
// 50
// 30
// 50
// 100
// 50
// 80
// 30
// `;
// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
