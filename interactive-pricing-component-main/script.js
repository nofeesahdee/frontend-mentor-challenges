const pageviews = document.querySelector('.pageviews')
const priceAmount = document.querySelector('.price')
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

  
let yearlyBilling = false;
let price = views[2].price;
let discountPrice = views[2].discount;

function handleInput(e) {
  let input = parseInt(e.target.value);

  views.forEach((item, index) => {
    let totalViews = item.pageview;
    let bg = index * 25;

    if (item.price === input) {
      price = item.price;
      discountPrice = item.discount;

      priceAmount.innerHTML = `<h1>$${price}.00</h1><span> /month</span>`;
      pageviews.textContent = `${totalViews} pageviews`;
      range.style.background = `linear-gradient(90deg,
        hsl(174, 76%, 80%) ${bg}%,
       hsl(223, 50%, 87%) ${bg}%)`;
    }

    if (yearlyBilling) {
      priceAmount.innerHTML = `<h1>$${discountPrice}.00</h1><span> /year</span>`;
    }
  });
}

function handleClick(checkbox) {
  yearlyBilling = checkbox.currentTarget.checked;
  
  if (yearlyBilling) {
    priceAmount.innerHTML = `<h1>$${discountPrice}.00</h1><span> /year</span>`;
    pageviews.textContent = `${totalViews} pageviews`;
  } else {
    priceAmount.innerHTML = `<h1>$${price}.00</h1><span> /month</span>`;
    pageviews.textContent = `${totalViews} pageviews`;

  }
}

checkbox.addEventListener('click', handleClick);

range.addEventListener('input', e => {
  handleInput(e);
});
//