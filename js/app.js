// inicializar variable 
const descriptions = document.querySelectorAll('.description');
const images = document.querySelectorAll('.image');
const titles = document.querySelectorAll('.title');
const prices = document.querySelectorAll('.price');
const buttons = document.querySelectorAll('.button'); 
const containers = document.querySelectorAll('.container');
const carts = document.querySelectorAll('.cart');
let priceTexts = document.querySelectorAll('.priceText');

// Iterar sobre cada elemento

buttons.forEach((button, index) => {
  const description = descriptions[index];
  const image = images[index];
  const title = titles[index];
  const price = prices[index]
  const priceText = priceTexts[index]

  const fruitRatings = {
    "Banano": '⭐⭐⭐⭐',
    "Manzana": '⭐⭐⭐⭐⭐',
    "Pera": '⭐⭐⭐',
    "Fresa": '⭐⭐⭐⭐',
  };
  const addToCart = {
    title: title.innerHTML,
    description: description.innerHTML,
    image: image.src,
    prices: price.innerHTML,
    priceTexts: priceText.innerHTML,
    stars: fruitRatings[title.innerHTML] || '⭐',
  }

  button.addEventListener('click', () => {
    // Recuperar el carrito del localStorage
    let cart = JSON.parse(localStorage.getItem('productCard')) || [];

    // Agregar el nuevo producto al carrito
    cart.push(addToCart);

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('productCard', JSON.stringify(cart));
  });

});

