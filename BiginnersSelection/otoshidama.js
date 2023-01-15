function Main(input) {
  input = input.split(' ');
  let res;
  let k = 0;

  for (let i = 0; i <= Number(input[0]); i++) {
    for (let j = 0; j <= Number(input[0]) - i; j++) {
      k = Number(input[0]) - i - j;
      if (10000 * i + 5000 * j + 1000 * k === Number(input[1])) {
        res = `${i} ${j} ${k}`;
      }
    }
  }
  if (res === undefined) {
    res = `-1 -1 -1`;
  }
  console.log(res);
}

// let input = `9 45000`;
// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
