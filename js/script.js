// - CHIEDERE CHILOMETRI DA PERCORRERE
// - CHIEDERE ETA'
// - CALCOLARE PREZZO DEL BIGLIETTO (0.21€ PER KM)
// - SCONTO 20% MINORENNI
// - SCONTO 40% OVER 65
// - PREZZO STAMPATO IN PAGINA CON MASSIMO DUE DECIMALI (CENTESIMI)

const firstName = document.getElementById('first-name')
console.log('nome ' + firstName.value)

const lastName = document.getElementById('last-name')
console.log('cognome ' + lastName.value)

const distance = document.getElementById('distance')
console.log('km ' + distance.value)

const age = document.getElementById('age')
console.log('età ' + age.value)

const create = document.getElementById('create')

const cancel = document.getElementById('cancel')


const priceParagraph = document.getElementById('price-paragraph')

const nameParagraph = document.getElementById('name-paragraph')

const surnameParagraph = document.getElementById('surname-paragraph')

const seatParagraph = document.getElementById('seat-paragraph')

const discountParagraph = document.getElementById('discount-paragraph')




create.addEventListener('click', function () {

    let price = parseInt(distance.value * 0.21);
    console.log(price)

    const random = Math.random()

    const minSeat = 1
    const maxSeat = 100
    const seat = Math.floor(random * (maxSeat + 1)) + minSeat;

    if (age.value === 'minor') {
        price = (price - price * 20 / 100).toFixed(2)
    }

    else if (age.value === 'senior') {
        price = (price - price * 40 / 100).toFixed(2)
    }

    nameParagraph.innerHTML = firstName.value;
    surnameParagraph.innerHTML = lastName.value;
    priceParagraph.innerHTML = '€ ' + price;
    seatParagraph.innerHTML = seat;
})

cancel.addEventListener('click', function () {

    firstName.value = ''
    lastName.value = ''
    distance.value = ''

    nameParagraph.innerHTML = '';
    surnameParagraph.innerHTML = '';
    priceParagraph.innerHTML = '';
})
