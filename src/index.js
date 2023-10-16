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
    let s;
    let array = [];
    
    for (let i = 0; i < expr.length; i += 10) {
        if (expr[i] == "*") {
            array.push(" ");
        } else {
            s = expr.substr(i, 10);
            array.push( Morse_to_letter(tenBits_to_Morse(s)) );
        }
    }
    return array.join("");
    
    function Morse_to_letter(str) {
        return MORSE_TABLE[str];
    }
    
    function tenBits_to_Morse(str) {
        let arr = [];
        for (let i = 0; i < str.length; i += 2) {
            if ((str[i] == 1) && (str[i + 1] == 1)) { arr.push("-"); }
            else if ((str[i] == 1) && (str[i + 1] == 0)) { arr.push("."); }
            else if (str[i] == 0) { continue; }
        }
        return arr.join("");
    }
}

module.exports = {
    decode
}