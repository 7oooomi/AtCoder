function Main(input) {
  input = input.split('\n');
  let count = 0;
  const numarr = input[1].split(' ');
  const call = (arr) => {
    const newArr = [];
    for (const i of arr) {
      if (i % 2 !== 0) {
        return;
      } else {
        let n = Number(i) / 2;
        newArr.push(n);
      }
    }
    count += 1;
    call(newArr);
  };

  call(numarr);

  console.log(count);
}

// let input = `6
// 382253568 723152896 37802240 379425024 404894720 471526144
// `;
// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
