export const utilService={
    getCurrencyIcon,
    getRandomNum,
}


 function getCurrencyIcon(currCode) {
    let sign = '';
    switch (currCode) {
        case 'EUR':
            sign = '€'
            break;
        case 'ILS':
            sign = '₪'
            break;
        case 'USD':
            sign = "$"
            break;
        default:
            sign = 'undefind currency-sign'
            break;
    }
    return sign;
}

function getRandomNum(){
    return Math.floor(Math.random*200);
}