export function splitIntoDigits(num:any, precision:number, minSize:number = 0) {
    let digits;
    // convert num i nto float with 2 decimals
    num = parseFloat(num).toFixed(precision);
    digits = num.toString().split('');
    // Add a . every 3 digits (ignoring the decimals)
    if (precision > 0) {
        for (let i = digits.length - 3 - (precision+1); i > 0; i -= 3) {
            digits.splice(i, 0, ' ');
        }
    } else {
        for (let i = digits.length - 3; i > 0; i -= 3) {
            digits.splice(i, 0, ' ');
        }
    }
    // Add 0s if the number is too small
    if (digits.length < minSize) {
        for (let i = 0; i < minSize - digits.length; i++) {
            digits.unshift('0');
        }
    }
    return digits
}