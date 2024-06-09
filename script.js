const precio = 400000;
let numero = 0;

precioSpan = document.querySelector(".precio-base");
precioSpan.innerHTML = precio;

let btnMas = document.querySelector("#btnMas");
let btnMenos = document.querySelector("#btnMenos");

let cantidad = document.querySelector(".cantidad");
cantidad.innerHTML = numero;

let valorTotal = document.querySelector(".valor-total");

function total() {
  valorTotal.innerHTML = precio * numero;
}

btnMas.addEventListener("click", () => {
  numero += 1;
  cantidad.innerHTML = numero;
  total();
});

btnMenos.addEventListener("click", () => {
  numero -= 1;
  if (numero < 0) {
    numero = 0;
  }

cantidad.innerHTML = numero;
  total();
});
