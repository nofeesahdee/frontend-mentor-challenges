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

range.addEventListener('input', handleInput());

let yearlyBilling = false;
let price = views[2].price;
let discountPrice = views[2].discount;

function handleInput(e) {
  let input = parseInt(e.target.value);

  views.forEach((view, index) => {
    let totalViews = view.pageview;
    let bg = index * 25;

    if (view.price === input) {
      price = view.price;
      discountPrice = view.discount;
      price.textContent = `$${price}.00`;
      pageviews.textContent = totalViews;
      slider.style.background = `linear-gradient(90deg,
        hsl(174, 76%, 80%) ${bg}%,
       hsl(223, 50%, 87%) ${bg}%)`;
    }

    if (yearlyBilling) {
      price.textContent = `$${discountPrice}.00`;
    }
  });
}
// Display the default slider value
// price.innerHTML = `<h1>$${range.value} <span>/month</span></h1>`;

// // Update the current slider value (each time you drag the slider handle)
// range.oninput = function() {
//   price.innerHTML = `<h1>$${this.value} <span>/month</span></h1>`;
// }