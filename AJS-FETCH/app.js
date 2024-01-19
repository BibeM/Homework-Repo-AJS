console.log("It works!");
/*
Fetch Exercise
Fetch the product data from "https://fakestoreapi.com/products" and log it to the console
Once you have all the data and can read it in console generate cards in the html that contain the data about the products
Every card should contain the id, title, price, description and image
The styling of the card is up to the student, what is mandatory is that all the above properties are displayed in the html
*/

const productContainerEl = document.querySelector(".product-container");
const productCardEl = document.querySelector(".product-card");

const FAKESTOREAPI = "https://fakestoreapi.com/products";

function renderProductCard(containerEl, products) {
  for (let product of products) {
    const newDiv = document.createElement("DIV");
    newDiv.innerHTML += ` <h3>${product.id}. 
        ${product.title} </h3> 
        <h4>${product.price} </h4>
        <h5>${product.description}</h5>
         <img src=" ${product.image}"/>`;
    containerEl.appendChild(newDiv);
  }
}

function fetchFakeStore() {
  fetch(FAKESTOREAPI)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderProductCard(productContainerEl, data);
    });
}

fetchFakeStore();
