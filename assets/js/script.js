async function fetchProductData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product data:', error);
      return [];
    }
  }

  async function renderProductCards() {
    const productCardsContainer = document.getElementById('productCards');
    const products = await fetchProductData();

    products.forEach(product => {
      const card = `
        <div class="col-lg-4 col-md-6 mb-4 " data-aos="fade-down">
          <div class="card"  >
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text">Price: $${product.price}</p>
            </div>
          </div>
        </div>
      `;
      productCardsContainer.innerHTML += card;
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderProductCards();
  });
  
//   AOS JS

  AOS.init();
