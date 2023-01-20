function Main(input) {
  input = input.trim().split('\n');
  let arr = input.shift();
  input.map((i, index) => {
    let count = 0;
    i = i.split(' ');
    if (index % 2 !== 0) {
      for (let j = 0; j < i.length; j++) {
        if (i[j] % 2 !== 0) {
          count++;
        }
      }
      console.log(count);
    }
  });
}
// let input = `4
// 3
// 1 2 3
// 2
// 20 23
// 10
// 6 10 4 1 5 9 8 6 5 1
// 1
// 1000000000`;
// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
