function Main(input) {
  input = input.split(' ');

  const num = Number(input[0]) * Number(input[1]);

  if (num % 2 == 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}
// let input = `3 4`;
// Main(input);

// *この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
