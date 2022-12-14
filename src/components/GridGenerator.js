import React, { useEffect, useState } from "react";
import "../styles/components/grid.css";
import Modal from "react-modal";

const GridGenerator = () => {
    const [numberOfCols, setNumberOfCols] = useState(3);
    const [numberOfRows, setNumberOfRows] = useState(2);
    const [modalIsOpenHTML, setIsOpenHTML] = useState(false);
    const [modalIsOpenCSS, setIsOpenCSS] = useState(false);
    const [selectedCells, setSelectedCells] = useState([]);

    const changeNumberOfCols = () => {
        setNumberOfCols(
            document.querySelector(".container-columnas input")?.value
        );
        setSelectedCells([]);
    };
    const changeNumberOfRows = () => {
        setNumberOfRows(
            document.querySelector(".container-filas input")?.value
        );
        setSelectedCells([]);
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
        tabla.innerHTML = "";
        for (let i = 0; i < numberOfRows; i++) {
            const tr = tabla.insertRow();
            for (let j = 0; j < numberOfCols; j++) {
                const td = tr.insertCell();
                td.setAttribute("id", `celda-${i}-${j}`);
                td.addEventListener("click", () => {
                    setSelectedCells([...selectedCells, [i, j]]);
                });
            }
        }
        window.onload = () => {
            document.querySelector(".container-filas input").value = 2;
            document.querySelector(".container-columnas input").value = 3;
        };
    });

    useEffect(() => {
        waitForElm(".table").then((elm) => {
            let index = 0;

            selectedCells.forEach((element) => {
                document
                    .querySelector("table")
                    .rows[element[0]].cells[element[1]].setAttribute(
                        "class",
                        "element"
                    );
                index++;
                document.querySelector("table").rows[element[0]].cells[
                    element[1]
                ].innerText = `div${index}`;
            });
        });
        console.log(selectedCells);
    }, [
        selectedCells,
        numberOfCols,
        numberOfRows,
        modalIsOpenHTML,
        modalIsOpenCSS,
    ]);

    const resetGrid = () => {
        setNumberOfCols(3);
        setNumberOfRows(2);
        document.querySelector(".container-filas input").value = 2;
        document.querySelector(".container-columnas input").value = 3;
        setSelectedCells([]);
    };

    function openModalHtml() {
        setIsOpenHTML(true);
        setSelectedCells(selectedCells);
    }

    function openModalCss() {
        setIsOpenCSS(true);
        setSelectedCells(selectedCells);
    }
    function closeModal() {
        setIsOpenHTML(false);
        setIsOpenCSS(false);
    }
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
        },
    };
    let index = 0;
    let htmlCode = "";
    let cssCode = "";

    selectedCells.forEach((element) => {
        index++;
        htmlCode += `\n    <div class="div${index}"></div>`;

        cssCode += `.div${index} { grid-area: ${element[0] + 1} / ${
            element[1] + 1
        } / ${element[0] + 2} / ${element[1] + 2} }\n`;
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
            <div className="show-code-buttons">
                <button onClick={openModalHtml}>Ver HTML</button>
                <button onClick={openModalCss}>Ver CSS</button>
            </div>
            <div className="reset-button">
                <button onClick={resetGrid}>Reiniciar</button>
            </div>

            <Modal
                isOpen={modalIsOpenHTML}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h1>HTML</h1>
                <pre>
                    {`<div class="parent">
                       ${htmlCode}
                    \n</div>`}
                </pre>
            </Modal>
            <Modal
                isOpen={modalIsOpenCSS}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h1>CSS</h1>
                <pre>{`.parent{\n   display: grid;\n}\n\n${cssCode}`}</pre>
            </Modal>
        </div>
    );
};

export default GridGenerator;
