(function () {
  const products = [
    {
      id: "1",
      title: "TENOR TROMBONE",
      //тут може бути вставлена картинка
      description: "TENOR TROMBONE...",
      price: 600,
    },
    {
      id: "2",
      title: "BASS TROMBONE",
      //тут може бути вставлена картинка
      description: "BASS TROMBONE...",
      price: 900,
    },
    {
      id: "3",
      title: "VALVE TROMBONE",
      //тут може бути вставлена картинка
      description: "VALVE TROMBONE...",
      price: 1200,
    },
  ];
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
