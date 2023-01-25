function Main(input) {
  input = input.split('\n');
  let str = input[1].split('');

  for (let i = 1; i < input[0]; i++) {
    let l = 0;
    for (let j = 0; i + j < input[0]; j++) {
      if (str[j] === str[i + j]) {
        break;
      } else {
        l++;
      }
    }
    console.log(l);
  }
}
// let input = `6
// abcbac`;
// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
