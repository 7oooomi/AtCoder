const isInHours = (h, m) => {
  if (0 <= h && h <= 23 && 0 <= m && m <= 59) {
    return true;
  }
  return false;
};

const check = (h, m) => {
  const A = Math.floor((h / 10) % 10);
  const B = Math.floor(h % 10);

  const C = Math.floor((m / 10) % 10);
  const D = Math.floor(m % 10);

  const AC = A * 10 + C;
  const BD = B * 10 + D;
  return isInHours(AC, BD);
};

function main(input) {
  let [h, m] = input.split(' ');

  h = Number(h);
  m = Number(m);

  while (!check(h, m)) {
    m++;
    if (m == 60) {
      m = 0;
      h++;
    }
    if (h == 24) {
      h = 0;
    }
  }

  console.log(h, m);
}
// let input = `19 57
// `;
// main(input);

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
