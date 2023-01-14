// inputに入力データ全体が入る
function Main(input) {
  input = input.split('\n');

  const a = Number(input[0]);
  const b = Number(input[1].split(' ')[0]);
  const c = Number(input[1].split(' ')[1]);
  const s = input[2];
  //出力
  console.log(a + b + c, s);
}

// let input = `72
// 128 256
// myonmyon
// `;

// Main(input);
// *この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
