function main(input) {
  input = input.split('');

  let alphabet = 'ABCDEFGHIJKlMNOPQRSTUVWXYZ'.split('');

  if (alphabet.indexOf(input[0]) !== -1 && alphabet.indexOf(input[7]) !== -1) {
    if (
      Number(input[1] + input[2] + input[3] + input[4] + input[5] + input[6]) >=
        100000 &&
      Number(input[1] + input[2] + input[3] + input[4] + input[5] + input[6]) <=
        999999
    ) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  } else {
    console.log('No');
  }
}
// let input = `K012345K`;
// main(input);
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
