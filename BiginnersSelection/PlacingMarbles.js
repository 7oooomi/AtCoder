function Main(input) {
  input = input.split('');
  let count = 0;

  for (const i of input) {
    if (1 == Number(i)) {
      count += 1;
    }
  }
  console.log(count);
}

let input = `000`;
Main(input);

// *この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
