//calc kw
let kWh = 250;
let costo = 0.15;
let impuesto = 0.10;
let costoBase = kWh * costo;
let impuestoToal = costoBase * impuesto;
let costoTotal = costoBase + impuestoToal;
console.log('consumo: ' + kWh + ' kWh');
console.log('costo sin impuesto: $' + costoBase.toFixed(2));
console.log('impuesto: $' + impuestoToal.toFixed(2));
console.log('costo total a pagar: $' + costoTotal.toFixed(2));