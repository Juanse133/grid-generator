import React from "react";
import help from "../assets/help.png";
import "../styles/components/Ayuda.css";

const Ayuda = () => {
    return (
        <div id="ayuda" className="ayuda-container">
            <h1>Ayuda</h1>
            <img src={help} alt="Ayuda"></img>
            <br></br>
            <p>
                Grid Generator es una herramienta que permite obtener el código
                HTML y CSS necesarios para el maquetado de interfaces con
                grillas.
            </p>
            <br></br>
            <p>
                La aplicación web cuenta con dos selectores de cantidad, para
                las columnas y filas respectivamente, un botón de reiniciar para
                restablecer el diseño a su forma original, también cuenta con
                dos botones para ver el código HTML y CSS necesario para generar
                la misma distribución.
            </p>
            <br></br>
            <p>
                Al dar clic en la casilla que se desee rellenar con un elemento
                se colorea y el código es generado automáticamente para ser
                revisado en su respectivo modal.
            </p>
            <br></br>
            <p>
                Para el cálculo del código HTML solo se tiene en cuenta la
                cantidad de clics sobre algún espacio de la cuadrícula simulando
                la cantidad de elementos que se deseen agregar.
            </p>
            <br></br>
            <p>
                Para el cálculo del código CSS se tiene en cuenta la posición en
                la que se ubica el inicio de cada elemento y se revisa la fila y
                la columna donde termina.
            </p>
            <br></br>
            <br></br>
            <strong>
                Aplicación desarrollada por Juan José Horta Osorio y Juan
                Sebastián Castaño Ramírez.
            </strong>
        </div>
    );
};

export default Ayuda;
