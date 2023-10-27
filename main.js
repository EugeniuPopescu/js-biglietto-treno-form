const fName = document.querySelector('#name');
const km = parseInt(document.querySelector('#km'));
const age = document.querySelector('#age');

const btnGenerate = document.querySelector('#generate');
const btnCancel = document.querySelector('#cancel');

const outName = document.querySelector('#outputName');
const outSale = document.querySelector('#outputSale');
const outCarroza = document.querySelector('#carrozza');
const outCodice = document.querySelector('#codice');
const outCostoBiglietto = document.querySelector('#costoBiglietto');

const price = km * 0.21
let distance;
let strangeAge;
let finalPrice;
let sale; 
let saleMessage;

btnGenerate.addEventListener('click', function() {
    // outName.innerHTML = fName.value;

    // controllo se non inserisco dati
    if ( fName.value==="" && !Number.isFinite(km) ) {
        // outName.innerHTML = `Something went wrong`;
        alert('Something went wrong');

        // partono i controlli
    } else {
        // controllo sulla distanza
    if ( km > 1000 ) {
        distance = `Prendi un aereo baby`;

    } else if ( km < 5 ) {
        distance = `Camminaaaaaa, pochi km, devi fare almeno 5 km`; 

    } else {
        distance = `Hai inserito una distanza percorribile dai nostri treni`;
        
        // prezzo finale
        if ( age.value==='Under 18' ) {
            sale = (price / 100) * 20;
            finalPrice = price - sale;
            saleMessage = `Sconto under 18 (${price}€ - ${sale.toFixed(2)}€ (sconto))`;
            
        } else if( age.value==='Over 65' ) {
            sale = (price / 100) * 40;
            finalPrice = price - sale;
            saleMessage = `Sconto over 65 (${price}€ - ${sale.toFixed(2)}€ (sconto))`;
            
        } else {
            finalPrice = price;
            saleMessage = `Biglietto Standard`;
        }
        outName.innerHTML = fName.value.toUpperCase();
        document.getElementById('age').innerHTML = `Validazione età: ${strangeAge} (${age} anni)`;
        outSale.innerHTML = `${saleMessage}`;
        outCostoBiglietto.innerHTML = `${finalPrice.toFixed(2)}`;
    }
    }
});