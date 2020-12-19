module.exports = function toReadable (number) {
    const base = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
        1000: "thousand",
        1000000: "million",
        1000000000: "billion",
        1000000000000: "trillion",
        1000000000000000: "quadrillion",
        1000000000000000000: "quintillion"
    };

    const digits = {
        1: "",
        2: " thousands",
        3: " millions",
        4: " billions",
        5: " trillions",
        6: " quadrillions",
        7: " quintillions",
    };

    if (number === 0) {
        return 'zero';
    }

    const splitD = function splitNumberByDigits(num) {
        let initarr = num.toString().split("").reverse();
        const arr = [];

        while (initarr.length !== 0) {
            if (initarr.length >= 3) {
                arr.unshift(initarr.slice(0, 3).reverse());
                initarr.splice(0, 3);
                continue;
            }

            arr.unshift(initarr.slice(0, initarr.length).reverse());
            initarr.splice(0, initarr.length);
        }

        return arr;
    };

    const readblD = function digitsToReadable(digit) {
        const res = [];

        for (let i in digit) {
            if (digit[i] == 0) {
                continue
            }

            if (digit.length == 3 && i == 0) {
                res.push(`${base[digit[i]]} ${base[`1${"0".repeat(digit.length - i - 1)}`]}`)
                continue;
            }
            
            if (i == (digit.length - 2)) {
                if (digit[i] == 1) {
                    console.log('asfas')
                    res.push(base[`${digit[(digit.length - 2)]}${digit[(digit.length - 1)]}`]);
                    break;
                }
            }

            res.push(`${base[`${digit[i]}${"0".repeat(digit.length - i - 1)}`]}`)

        }

        return res.join(' ');
    }

    const splitted = splitD(number);
    const res = splitted.map((e, i, a) => `${readblD(e)}${digits[a.length - i]}`).join(' ');

    console.log(res)
    return res 
}

