function main(input) {
  for (let i = input; i >= 0; i--) {
    console.log(i);
  }
}
// let input = `3`;
// main(input);

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
