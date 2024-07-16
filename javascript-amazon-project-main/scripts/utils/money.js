// export function formatCurrency(priceCents) {
//     return (priceCents / 100).toFixed(2);
// }


function formatCurrency(priceCents) {
    return (Math.round(priceCents) / 100).toFixed(2);
}