const inputName = document.querySelector('#name');
const inputKm = parseInt(document.querySelector('#inputKm'));
const age = document.querySelector('#age');

const btnGenerate = document.querySelector('#generate');
const btnCancel = document.querySelector('#cancel');

const outName = document.querySelector('#outputName');
const outSale = document.querySelector('#outputSale');
const outCarroza = document.querySelector('#carrozza');
const outCodice = document.querySelector('#codice');
const outCostoBiglietto = document.querySelector('#costoBiglietto');

let price = inputKm * 0.21
let distance;
let strangeAge;
let finalPrice;
let sale; 
let saleMessage;

btnGenerate.addEventListener('click', function() {
    // outName.innerHTML = inputName.value;

    // controllo se non inserisco dati
    if ( inputName.value=="" && !Number.isFinite(inputKm) ) {
        console.log('ciao');
        // outName.innerHTML = `Something went wrong`;
        alert('Something went wrong');

        
        console.log(finalPrice);

        // partono i controlli
    } else {        
        // prezzo finale
        if ( age.value=='Under 18' ) {
            sale = (price / 100) * 20;
            finalPrice = price - sale;
            saleMessage = `Sconto under 18 (${price}€ - ${sale.toFixed(2)}€ (sconto))`;
            
        } else if( age.value=='Over 65' ) {
            sale = (price / 100) * 40;
            finalPrice = price - sale;
            saleMessage = `Sconto over 65 (${price}€ - ${sale.toFixed(2)}€ (sconto))`;
            
        } else {
            finalPrice = price;
            saleMessage = `Biglietto Standard`;
        }

        outName.innerHTML = inputName.value.toUpperCase();
        outSale.innerHTML = `${saleMessage}`;
        outCarroza.innerHTML = Math.floor(Math.random() * 9) + 1;
        outCodice.innerHTML = Math.floor(Math.random() * 99999) + 1;
        outCostoBiglietto.innerHTML = `${finalPrice.toFixed(2)}`;
    }
});