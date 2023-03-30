import { count } from "./app.js";

const crearBotonEliminar = (item, nombres, totalPrecios) => {
    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("cards__btn");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => {
        const resta = 1;
        const item = botonEliminar.closest(".cards__box");
        const nombreAEliminar = item.querySelector(".cards__name").textContent;
        const precioAEliminar = item.querySelector(".cards__price").textContent.replace("$", "");
        const indice = nombres.indexOf(nombreAEliminar);
        count.contador -= resta;
        nombres.splice(indice, 1);
        totalPrecios.splice(indice, 1);
        item.remove();
    });
    return botonEliminar;
};

export const delateBtn = {
    crearBotonEliminar
}