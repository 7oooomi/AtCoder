function Main(input) {
  input = input.trim();

  if (input.match(/^(dream|dreamer|erase|eraser)*$/gm)) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

// let input = `dreamerer`;
// Main(input);

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
