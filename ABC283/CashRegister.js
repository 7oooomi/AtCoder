function main(input) {
  input = input.trim().split('\n');
  let N = input[0];
  let count = 0;
  for (let i = 0; i < N.length; i++) {
    if (N[i] === '0' && N[i + 1] === '0') i++;
    count++;
  }
  console.log(count);
}
// let input = `40004`;
// main(input);

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
