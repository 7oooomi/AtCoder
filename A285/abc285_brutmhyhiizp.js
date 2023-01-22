function main(input) {
  input = input.trim().split('\n');
  let s = input[0];

  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let ans = 0n;
  for (let i = 0; i < s.length; i++) {
    let n = alphabet.indexOf(s[i]) + 1;
    ans += BigInt(n) * BigInt(Math.pow(26, s.length - 1 - i));
  }
  console.log(ans.toString());
}
// let input = `ABC`;
// main(input);
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
