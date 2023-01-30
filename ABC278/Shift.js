function main(input) {
  input = input.split('\n');
  let a = input[0].split(' ');
  let line = input[1].split(' ');
  for (let i = 0; i < a[1]; i++) {
    line.shift();
  }
  for (let i = line.length; i < a[0]; i++) {
    line.push('0');
  }
  console.log(line.join(' '));
}

// let input = `3 2
// 2 7 8
// `;
// main(input);
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
