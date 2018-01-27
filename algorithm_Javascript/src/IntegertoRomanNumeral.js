/**
Given an integer, convert it to a roman numeral.
Input is guaranteed to be within the range from 1 to 3999.


Symbol	I	V	X	L	C	D	M
Value	1	5	10	50	100	500	1,000

 */
function convertByUnit(unit, digit){
    if(digit == 0){
        return '';
    }
    if(digit == 4){
        return unit[1] + unit[5];
    }
    else{
        if(digit >= 5){
            if(digit === 9){
                return unit[1] + unit[10];
            }
            digit = digit - 5;
            return unit[5] + unit[1].repeat(digit);
        }
        else{
            return unit[1].repeat(digit);
        }
    }
}

export function IntegertoRomanNumeral(num){
    let ones = {
        1: 'I',
        5: 'V',
        10: 'X'
    };

    let tens ={
        1: 'X',
        5: 'L',
        10: 'C'
    };

    let hundreds = {
        1: 'C',
        5: 'D',
        10: 'M',
    };

    let thousands = {
        1: 'M'
    };

    let unit = 1;
    let finalAnswer = '';
    let subAnswer = '';

    while(num > 0){
        var digitatHand = num % 10;
        if(unit === 1){
            finalAnswer = convertByUnit(ones, digitatHand) + finalAnswer;
        }
        else if(unit === 10){
            finalAnswer = convertByUnit(tens, digitatHand) + finalAnswer;
        }
        else if(unit === 100){
            finalAnswer = convertByUnit(hundreds, digitatHand) + finalAnswer;
        }
        else if(unit === 1000){
            finalAnswer = convertByUnit(thousands, digitatHand) + finalAnswer;
        }
        num = (num - digitatHand) / 10;
        unit = unit * 10;
    }
    return finalAnswer;
}