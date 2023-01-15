function Main(input) {
  input = input.split(' ');
  const a = Number(input[1]);
  const b = Number(input[2]);
  let res = 0;
  for (let i = 1; i <= Number(input[0]); i++) {
    let arr = String(i).split('');
    let sum = 0;
    for (const num of arr) {
      sum += Number(num);
    }
    if (sum >= a && sum <= b) {
      res += i;
    }
  }
  console.log(res);
}

// let input = `100 4 16`;
// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
