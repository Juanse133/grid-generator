import React from "react";
import "../styles/components/HeaderComponent.css";
import logo from "../Logo.png";

const HeaderComponent = () => {
    return (
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <a href="/">
                        <img src={logo} alt="Logo Grid Generator" />
                    </a>
                </div>
                <div className="navbar-container">
                    <ul>
                        <li>
                            <a href="#ayuda">Ayuda</a>
                        </li>

                        <li>
                            <a href="#contacto">Contacto</a>
                        </li>
                        <li>
                            <a href="#nosotros">Nosotros</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
