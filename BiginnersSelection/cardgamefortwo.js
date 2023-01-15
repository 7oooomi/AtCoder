function Main(input) {
  input = input.split('\n');
  let a = 0;
  let b = 0;
  let arr = input[1].split(' ').sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      a += Number(arr[i]);
    } else {
      b += Number(arr[i]);
    }
  }
  console.log(a - b);
}
// let input = `4
// 20 18 2 18
// `;
// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
