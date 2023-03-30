import { delateBtn } from "./botonEliminar.js";

const card = (nombre, precio, nombres, totalPrecios) => {
    const linea = document.createElement("div");
    linea.classList.add("cards__box");
    const contenido = `
    <ul class="cards__container">
        <li class="cards__name">${nombre}</li>
        <li class="cards__price">$${precio}</li>
        <li></li>
    </ul>
    `;
    linea.innerHTML = contenido;
    const item = linea.querySelector(".cards__container");
    const botonEliminar = delateBtn.crearBotonEliminar(item, nombres, totalPrecios);
    item.children[2].appendChild(botonEliminar);
    return linea;
}; 
const card2 = (nombre, nombres, divicion) => {
    const linea = document.createElement("div");
    linea.classList.add("card__result");
    const contenido = `
    <ul class="card__container">
        <li class="card__name">${nombre}</li>
        <li class="card__name">==></li>
        <li class="card__name">$${divicion.toFixed(2)}</li>
        <li class="card__name">${nombres}</li>
    </ul>
    `;
    linea.innerHTML = contenido;
    return linea;
}; 

export const div = {
    card,
    card2
}