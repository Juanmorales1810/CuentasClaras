import { div } from "./card.js";
// import { delateBtn } from "./botonEliminar.js";

const formulario = document.querySelector("[data-form]");
let totalPrecios = [];
let nombres = [];
let nombre = [];
let contador = 0;
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const suma = 1
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = parseFloat(document.querySelector("[data-price]").value);
    const table = document.querySelector("[data-card]");
    const nuevaLinea = div.card(nombre, precio, nombres, totalPrecios);
    table.appendChild(nuevaLinea);
    document.querySelector("[data-nombre]").value='';
    document.querySelector("[data-price]").value='';
    nombres.push(nombre);
    totalPrecios.push(precio);
    contador += suma;
});

  const botonCalculcular = formulario.querySelector("[data-calcular]");
  botonCalculcular.addEventListener("click", () => {
    if (contador == 0){
      alert('ingrese nombre y monto antes de calcular');
    }else
    var preciosConNombres = totalPrecios.map((precio, indice) => {
      return { precio, nombre: nombres[indice] };
    });
    preciosConNombres.sort((a, b) => b.precio - a.precio);
    totalPrecios = preciosConNombres.map(obj => obj.precio);
    nombres = preciosConNombres.map(obj => obj.nombre);
    nombre = preciosConNombres.map(obj => obj.nombre);
    let countnombres = 0
    nombres.forEach(function(nombres) {
      // funcion de crear div
      nombre.forEach(function(nombre) {
        // funcion de calculo y de crear ul
        let divicion = totalPrecios[countnombres]/contador;
        if(divicion!=0 && nombre!=nombres){
          const result = document.querySelector("[data-result]");
          const nuevaLinea = div.card2(nombre, nombres, divicion);
          result.appendChild(nuevaLinea);
        }
      });
      countnombres++
    });
  });

  export let count = {
    contador
  }