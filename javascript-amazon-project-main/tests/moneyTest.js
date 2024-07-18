function formatCurrency(priceCents) {
    return (Math.round(priceCents) / 100).toFixed(2);
}


// Basic Test Cases
console.log('test suite: formatCurrency');

console.log('converts into dollars')

if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
}


// Edge Cases
console.log('works with 0')

if (formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('failed');
}


console.log('rounds up to the nearest cents')

if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
} else {
    console.log('failed');
}

