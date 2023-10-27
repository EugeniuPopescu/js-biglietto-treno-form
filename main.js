const fName = document.querySelector('#name');
const km = document.querySelector('#km');
const age = document.querySelector('#age');
const btnGenerate = document.querySelector('#generate');
const btnCancel = document.querySelector('#cancel');
const outName = document.querySelector('#outputName');

btnGenerate.addEventListener('click', function() {
    outName.innerHTML = fName.value;
});