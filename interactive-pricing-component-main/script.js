const pageviews = document.querySelector('.pageviews')
const price = document.querySelector('.price')
const range = document.querySelector('.range-input')
const checkbox = document.querySelector('.checkbox')

let views = [
    {
      id: 1,
      price: 8,
      discount: 72,
      pageview: '10K',
    },
    {
      id: 2,
      price: 12,
      discount: 108,
      pageview: '50K',
    },
    {
      id: 3,
      price: 16,
      discount: 144,
      pageview: '100K',
    },
    {
      id:4,
      price: 20,
      discount: 180,
      pageview: '500K',
    },
    {
      id: 5,
      price: 24,
      discount: 216,
      pageview: '1M',
    },
  ];


// //Display the default slider value

//     price.innerHTML = `<h1>$${range.value} <span>/month</span></h1>`;
// // Update the current slider value (each time you drag the slider handle)
// range.oninput = function() {
//   price.innerHTML = `<h1>$${this.value} <span>/month</span></h1>`;
// }

// // views.forEach(view,{
    
// //     pageviews.innerHTML = `<h3>${views.pageview}</h3>`
// // })

// checkbox.addEventListener('checked', {

// })