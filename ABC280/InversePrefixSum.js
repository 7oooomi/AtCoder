function Main(input) {
  input = input.split('\n');
  let arr = input[1].split(' ');
  const res = [];
  arr.map((a, b) => {
    res.push(arr[b + 1] - a);
  });
  res.pop();
  res.unshift(arr[0]);
  console.log(res.join(' '));
}

// let input = `3
// 3 4 8`;

// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
