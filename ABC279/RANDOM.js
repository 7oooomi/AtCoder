function main(input) {
  //   input = input.split('\n');
  //   let num = input[0].split('');
  //   let arr1 = [];
  //   for (let i = 1; i <= num[0]; i++) {
  //     let arr = input[i].split('');
  //     let count = 0;
  //     arr.map((i) => {
  //       if (i === '#') {
  //         count++;
  //       }
  //     });
  //     arr1.push(count);
  //   }
  //   let arr2 = [];
  //   for (let i = Number(num[0]) + 1; i < input.length - 1; i++) {
  //     let arr = input[i].split('');
  //     let count = 0;
  //     arr.map((i) => {
  //       if (i === '#') {
  //         count++;
  //       }
  //     });
  //     arr2.push(count);
  //   }
  //   if (arr1.toString() === arr2.toString()) {
  //     console.log('Yes');
  //   } else {
  //     console.log('No');
  //   }
  const rotate = (a) => {
    a[0].map((_, c) => a.map((r) => r[c]));
  };

  const args = input.split('\n');
  let info = args[0].split(' ').map((x) => x * 1);

  let arr0 = rotate(args.slice(1, info[0] + 1).map((x) => x.split('')))
    .map((x) => x.join(''))
    .sort()
    .join('');
  let arr1 = rotate(args.slice(1 + info[0]).map((x) => x.split('')))
    .map((x) => x.join(''))
    .sort()
    .join('');
  console.log(arr0 === arr1 ? 'Yes' : 'No');
}

let input = `3 4
##.#
##..
#...
.###
..##
...#
`;
main(input);
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
