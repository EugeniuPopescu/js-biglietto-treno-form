let SELECTORS = {
    inputName: document.querySelector('#name'),
    inputKm: document.querySelector('#km'),
    age: document.querySelector('#age'),
    
    btnGenerate: document.querySelector('#generate'),
    btnCancel: document.querySelector('#cancel'),
    
    outName: document.querySelector('#outputName'),
    outSale: document.querySelector('#outputSale'),
    outCarroza: document.querySelector('#carrozza'),
    outCodice: document.querySelector('#codice'),
    outCostoBiglietto: document.querySelector('#costoBiglietto')
};

let distance;
let strangeAge;
let finalPrice;
let sale; 
let saleMessage;

SELECTORS.btnGenerate.addEventListener('click', function() {
    // outName.innerHTML = inputName.value;
    // var inputKmValue = parseInt(inputKm.value);
    let price = parseInt(SELECTORS.inputKm.value) * 0.21;
    let ticket = document.querySelector('.ticket');

    // controllo se non inserisco dati
    if (SELECTORS.inputName.value === "" && !Number.isFinite(SELECTORS.inputKm)) {
        alert('Something went wrong');

        // partono i controlli
    } else {   
        // var currentAge = age && age.value? age.value: 'value null'; 
        ticket.classList.remove('d-none');
        // controllo distanza
        if(SELECTORS.inputKm.value > 1000) {
            SELECTORS.outCostoBiglietto.innerHTML = `ERROR non superiamo i 1000Km`;

        } else {
            if(SELECTORS.age.value === 'Under-18') {
            sale = (price / 100) * 20;
                finalPrice = price - sale;
                saleMessage = `Sconto under 18 (${price}€ - ${sale.toFixed(2)}€)`;
                
            } else if(SELECTORS.age.value === 'Over-65' ) {
                sale = (price / 100) * 40;
                finalPrice = price - sale;
                saleMessage = `Sconto over 65 (${price}€ - ${sale.toFixed(2)}€)`;
                
            } else {
                finalPrice = price;
                saleMessage = `Biglietto Standard`;
            }
            SELECTORS.outName.innerHTML = SELECTORS.inputName.value.toUpperCase();
            SELECTORS.outSale.innerHTML = `${saleMessage}`;
            SELECTORS.outCarroza.innerHTML = Math.floor(Math.random() * 9) + 1;
            SELECTORS.outCodice.innerHTML = Math.floor(Math.random() * 99999) + 1;
            SELECTORS.outCostoBiglietto.innerHTML = `${finalPrice.toFixed(2)}€`;
        }
    }
});

// click btnCancel to recharge page
SELECTORS.btnCancel.addEventListener('click', function() {
    window.location.reload()
})