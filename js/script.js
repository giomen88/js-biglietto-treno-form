
const firstName = document.getElementById('first-name')

const lastName = document.getElementById('last-name')

const distance = document.getElementById('distance')

const age = document.getElementById('age')

const create = document.getElementById('create')

const cancel = document.getElementById('cancel')


const priceParagraph = document.getElementById('price-paragraph')

const nameParagraph = document.getElementById('name-paragraph')

const surnameParagraph = document.getElementById('surname-paragraph')

const seatParagraph = document.getElementById('seat-paragraph')

const codeParagraph = document.getElementById('code-paragraph')

const rateParagraph = document.getElementById('rate-paragraph')

const discountParagraph = document.getElementById('discount-paragraph')

// VALIDAZIONE


// if (isNaN(distance.value) || distance.value < 1 || distance.value == '') {
//     alert('La distanza inserita non è corretta!')
// }

// else {

create.addEventListener('click', function () {

    let price = parseInt(distance.value * 0.21);
    console.log(price);

    const random = Math.random();

    const minSeat = 1;
    const maxSeat = 100;
    const seat = Math.floor(random * (maxSeat + 1)) + minSeat;

    const minCode = 4000;
    const maxCode = 9000;
    const code = Math.floor(random * (maxCode + 1)) + minCode;

    const discountMessage = 'Hai uno sconto del ';

    let rate = 'Adult';

    if (age.value === 'minor') {
        price = (price - price * 20 / 100).toFixed(2)
        rate = 'Junior'
        discountParagraph.innerHTML = discountMessage + '<strong>20%</strong>'
    }

    else if (age.value === 'senior') {
        price = (price - price * 40 / 100).toFixed(2)
        rate = 'Senior'
        discountParagraph.innerHTML = discountMessage + '<strong>40%</strong>'
    }

    nameParagraph.innerHTML = `<strong>${firstName.value}</strong>`;
    surnameParagraph.innerHTML = `<strong>${lastName.value}</strong>`;
    seatParagraph.innerHTML = `<strong>${seat}</strong>`;
    codeParagraph.innerHTML = `<strong>${code}</strong>`;
    rateParagraph.innerHTML = `<strong>${rate}</strong>`;
    priceParagraph.innerHTML = `<strong>€${price}</strong>`;
})

cancel.addEventListener('click', function () {

    firstName.value = '';
    lastName.value = '';
    distance.value = '';

    nameParagraph.innerHTML = '';
    surnameParagraph.innerHTML = '';
    seatParagraph.innerHTML = '';
    codeParagraph.innerHTML = '';
    rateParagraph.innerHTML = '';
    priceParagraph.innerHTML = '';
    discountParagraph.innerHTML = '';

})
// }