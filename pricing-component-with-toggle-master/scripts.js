const toggleSwitch = document.querySelector('.switch')
const subscription = document.querySelectorAll('.componentSubscription')

const checkbox = document.querySelector('.checkbox')

const pricingComponentData = [
    {
        subscriptionMonthly: 19.99,
        subscriptionAnnually: 199.99
    },
    {
        subscriptionMonthly: 24.99,
        subscriptionAnnually: 249.99
    },
    {
        subscriptionMonthly: 39.99,
        subscriptionAnnually: 399.99
    }
]

for (let i = 0; i < pricingComponentData.length; i++) {
    subscription[i].innerText = '$ ' + pricingComponentData[i].subscriptionMonthly
}

toggleSwitch.addEventListener('click', () => {
    
    for (let i = 0; i < pricingComponentData.length; i++) {
        if (checkbox.checked) {
            subscription[i].innerText = '$ ' + pricingComponentData[i].subscriptionAnnually
        } else {
            subscription[i].innerText = '$ ' + pricingComponentData[i].subscriptionMonthly
        }
    }
})
