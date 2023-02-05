const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbols = '';
    for (let i = 0; i < expr.length; i += 10) {
      if (expr.slice(i, i + 10)[0] === '*') {
        symbols += ' ';
      } else {
        symbols += MORSE_TABLE[morse(expr.slice(i, i + 10))];
      }
    }
    
    function morse (str) {
        let text = ''; 
        for (let i = 0; i < str.length; i += 2) {
          if ((str.slice(i, i+ 2)) === '00') {
            text += '';
          }  else if  ((str.slice(i, i+ 2)) === '10') {
            text += '.';
          } else if ((str.slice(i, i+ 2)) === '11') {
            text += '-';
          } else {
            alert('invalid input!');
          }
        }
        return text;
    }
    return symbols;
}
module.exports = {
    decode
}