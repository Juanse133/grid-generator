import React, { useState } from "react";
import "../styles/components/grid.css";

const GridGenerator = () => {
    const [numberOfCols, setNumberOfCols] = useState(1);
    const [numberOfRows, setNumberOfRows] = useState(1);

    const changeNumberOfCols = () => {
        setNumberOfCols(
            document.querySelector(".container-columnas input")?.value
        );
    };
    const changeNumberOfRows = () => {
        setNumberOfRows(
            document.querySelector(".container-filas input")?.value
        );
    };

    //CHECK IF SOMETHING EXISTS
    function waitForElm(selector) {
        return new Promise((resolve) => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }
            const observer = new MutationObserver((mutations) => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });
            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        });
    }

    waitForElm(".table").then((elm) => {
        let tabla = document.querySelector("table");
        console.log("aaa");
        tabla.innerHTML = "";
        for (let i = 0; i < numberOfRows; i++) {
            const tr = tabla.insertRow();
            for (let j = 0; j < numberOfCols; j++) {
                tr.insertCell();
            }
        }
    });

    return (
        <div className="grid-container">
            <div className="container-columnas">
                <div>Columnas</div>
                <input
                    type="number"
                    min="1"
                    max="12"
                    id="columns"
                    onChange={changeNumberOfCols}
                ></input>
            </div>

            <div className="table">
                <table></table>
            </div>
            <div className="container-filas">
                <div>Filas</div>
                <input
                    type="number"
                    min="1"
                    max="12"
                    id="rows"
                    onChange={changeNumberOfRows}
                ></input>
            </div>
        </div>
    );
};

export default GridGenerator;
