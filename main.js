let cardName = document.getElementById("cardholder_name")
let nameCard = document.getElementById("card_name")
let numberCard = document.getElementById("card_number")
let cardNumber = document.getElementById("number_card")
let expMonth = document.getElementById("expiration_month")
let monthExp = document.getElementById("exp_month")
let expYear = document.getElementById("expiration_year")
let yearExp = document.getElementById("exp_year")
let cvcCard = document.getElementById("cvc_card")
let cardCvc = document.getElementById("cvc")
let submitButton = document.getElementById("submit")
let inputError = document.getElementById("input_error")

// Name input
cardName.addEventListener("input", function(event){
    nameCard.innerHTML= event.target.value
})

// Number input
numberCard.addEventListener("input", function(event){
    let numberCardToString = event.target.value.replace(/\D/g, '').substring(0, 16);
    let result = ""
    for (let index = 0; index < numberCardToString.length; index = index +1){
        if (index > 0 && index %4 == 0) {
            result += " "
        }
        result += numberCardToString[index]
    }
    cardNumber.innerHTML= result
    numberCard.value = result
})

// Expiration date
// Month
expMonth.addEventListener("input", function(event){
    let resultFormated = event.target.value.replace(/\D/g, '').substring(0, 2);
    if (Number(resultFormated) > 12) {
        resultFormated = 12
    }
    monthExp.innerHTML = resultFormated
    expMonth.value = resultFormated
})
// Year
expYear.addEventListener("input", function(event){
    

    yearExp.innerHTML= event.target.value
})

// CVC
cvcCard.addEventListener("input", function(event){
    cardCvc.innerHTML= event.target.value
})

// Button
submitButton.addEventListener("click", function(event){
    event.preventDefault()
    if (numberCard.value.length > 16) {
        inputError.style.cssText = 'display: block; color: red;';
    }
})


