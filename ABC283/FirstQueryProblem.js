function Main(input) {
  input = input.split('\n');
  let a = input[1].split(' ');

  for (let i = 3; i < input.length; i++) {
    let query = input[i].split(' ');

    let num = query[1] - 1;
    if (query.length == 2) {
      console.log(a[num]);
    } else {
      a[num] = query[2];
    }
  }
}

// let input = `5
// 22 2 16 7 30
// 10
// 1 4 0
// 1 5 0
// 2 2
// 2 3
// 2 4
// 2 5
// 1 4 100
// 1 5 100
// 2 3
// 2 4`;
// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
