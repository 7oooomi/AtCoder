function Main(input) {
  input = input.split('\n');
  let str = input[1].split('');
  let count = 0;
  let res = '';
  for (let i = 0; i < str.length; i++) {
    let ele = str[i];
    if (str[i] === '"') {
      count++;
    }
    if (str[i] === ',') {
      if (count % 2 === 0) {
        ele = '.';
      }
    }
    res += ele;
  }
  console.log(res);
}

// let input = `8
// "a,b"c,d
// `;
// Main(input);
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
