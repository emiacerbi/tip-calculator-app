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

const checkError = () => {
    if(people.value <= '0') {
        document.querySelector('.main__people__header__error').style.opacity = 1 
        people.classList.add('error')
    } else {
        document.querySelector('.main__people__header__error').style.opacity = 0
        people.classList.remove('error')
    }
}

const getTotal = () => {
    let billRes = Number(checkBill())
    let tipRes = Number(checkTipRadio() ? checkTipRadio() : checkCustomTip())*0.01
    let peopleRes = Number(checkPeople()) 

    if(peopleRes <= 0) {
        totalAmount.innerText = '$0'
        return
    }

    totalAmount.innerText = `$${(( billRes + (billRes*tipRes) ) / peopleRes).toFixed(2)}`
}

const getTip = () => {
    let billRes = Number(checkBill())
    let tipRes = Number(checkTipRadio() ? checkTipRadio() : checkCustomTip())*0.01
    let peopleRes = Number(checkPeople()) 

    if(peopleRes <= 0) {
        tipAmount.innerText = '$0'
        return
    }

    let result = `$${(( billRes*tipRes) / peopleRes).toFixed(2)}`
    tipAmount.innerText = result

}

const reset = () => {
    bill.value = 0
    people.value = 1
}

resetBtn.addEventListener('click', reset)

people.addEventListener('click', checkError)

window.addEventListener('click', () => {
    getTip()
    getTotal()
    checkError()
})

window.addEventListener('input', () => {
    getTip()
    getTotal()
    checkError()
})



