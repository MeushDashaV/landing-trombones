(async function () {

const response = await fetch('api/products.json');
const products = await response.json();

  function renderProducts(products){
    const productsContainer = document.querySelector(".main-products__list");
    productsContainer.innerHTML = '';
    for (const product of products) {
        productsContainer.innerHTML += 
        `<article class="pricing-card">
        <h3 class="product-card__h3">${product.title}</h3>
        <h2 class="price">$${product.price}</h2>
        <ol class="product-card__description">
          <li>Lorem ipsum.</li>
          <li>Lorem ipsum.</li>
          <li>Lorem ipsum dolor.</li>
          <li>Lorem ipsum.</li>
        </ol>
        <div class="product-card__buttons">
          <button class="product-card__buttons-select">
            <p class="select">Select</p>
          </button>
        </div>
      </article>`;
    }
  }
  renderProducts(products);
})();
