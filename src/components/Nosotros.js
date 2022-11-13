import React from "react";
import js from "../assets/js.png";
import jj from "../assets/jj.png";
import "../styles/components/Nosotros.css";

const Nosotros = () => {
    return (
        <div id="nosotros" className="nosotros-container">
            <h1>Nosotros</h1>
            <div className="nosotros-col">
                <div className="jj">
                    <img src={jj} alt="Foto Juan José" />
                    <p>Juan José Horta Osorio</p>
                </div>
                <div className="js">
                    <img src={js} alt="Foto Juan Sebastián" />
                    <p>Juan Sebastián Castaño Ramírez</p>
                </div>
            </div>
        </div>
    );
};

export default Nosotros;
