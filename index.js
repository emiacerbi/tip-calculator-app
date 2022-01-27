const bill = document.getElementById('bill')
const tips = document.getElementsByName('tip')
const customTip = document.getElementById('tip-custom')
const people = document.getElementById('people')

const tipAmount = document.getElementById('tip-amount')
const totalAmount = document.getElementById('total-amount')

const labels = document.querySelectorAll('label')

const resetBtn = document.getElementById('reset')

const checkBill = () => {
    return bill.value
}

const removeEffect = () => {
    // Remove selected button class
    for(let label of labels){
        label.classList.remove('active')
    }    
}

const checkTipRadio = () => {
    for(let tip of tips) {
        removeEffect()

        if(tip.checked) {
            tip.nextElementSibling.classList.add('active')
            return tip.value
        }
    }
}

const checkCustomTip = ()  => {
    removeEffect()
    console.log(customTip.value)

    return customTip.value
}

customTip.addEventListener('click', () => {
    for(let tip of tips) {
        tip.checked ? tip.checked = false : tip.checked
    }
})

const checkPeople = () => {
    return people.value
}

const getTotal = () => {
    let billRes = Number(checkBill())
    let tipRes = Number(checkTipRadio() ? checkTipRadio() : checkCustomTip())*0.01
    let peopleRes = Number(checkPeople()) 
    totalAmount.innerText = `$${(( billRes + (billRes*tipRes) ) / peopleRes).toFixed(2)}`
}

const getTip = () => {
    let billRes = Number(checkBill())
    let tipRes = Number(checkTipRadio() ? checkTipRadio() : checkCustomTip())*0.01
    let peopleRes = Number(checkPeople()) 
    tipAmount.innerText = `$${(( billRes*tipRes) / peopleRes).toFixed(2)}`
}

const reset = () => {
    bill.value = 0
    people.value = 1
}

resetBtn.addEventListener('click', reset)

window.addEventListener('click', () => {
    getTip()
    getTotal()
})

window.addEventListener('input', () => {
    getTip()
    getTotal()
})


