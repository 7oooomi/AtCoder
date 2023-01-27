function main(input) {
  input = input.split('\n');
  let A = input[0];
  let a = input[0].split('');
  let b = input[1];

  let before = a.slice(0, a.length - 1).join('');
  let after = a.slice(1, a.length).join(' ');
  if (A === b) {
    console.log('Yes');
  } else {
    if (before.includes(b) == true || after.includes(b)) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }
}

// let input = `toyotasystems
// toyotasystems
// `;
// main(input);
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
