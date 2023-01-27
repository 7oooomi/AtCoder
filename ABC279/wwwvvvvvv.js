function main(input) {
  input = input.split('');
  input.pop();
  let count = 0;
  for (const i of input) {
    if (i == 'w') {
      count += 2;
    } else {
      count++;
    }
  }
  console.log(count);
}

// let input = `vvwvw
// `;

// main(input);
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
