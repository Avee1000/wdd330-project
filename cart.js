import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}



function calculateCartTotal(items) {
  // if (!items || items.length === 0) return;
  let total = 0;
  items.forEach((item) => {
    const price = parseFloat(item.FinalPrice || item.price || 0);
    const quantity = item.quantity || 1;
    total += price * quantity;
  });

  const totalAmount = document.querySelector(".cart-total");
  totalAmount.innerHTML += `$${total.toFixed(2)}`;
}
const cartItems = getLocalStorage("so-cart");
renderCartContents(cartItems);
calculateCartTotal(cartItems);

