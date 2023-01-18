function Main(input) {
  input = Number(input);
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const res = [];
  for (let i = 0; i < alphabet.length; i++) {
    if (input - 1 >= i) {
      res.push(alphabet[i]);
    }
  }
  console.log(res.join(''));
}
// let input = `3`;
// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
