//conversion 
let usd = 100;
let euro = 0.92;
let svc = 8.75;
let gtq = 7.80;
let conversionEuro = usd * euro;
let conversionSvc = usd * svc;
let conversionGtq = usd * gtq;
console.log('La conversión de ' + usd + ' USD a Euro es: $' + conversionEuro.toFixed(2));
console.log('La conversión de ' + usd + ' USD a SVC es: $' + conversionSvc.toFixed(2));
console.log('La conversión de ' + usd + ' USD a GTQ es: $' + conversionGtq.toFixed(2));
