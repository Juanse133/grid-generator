import React, { useState } from "react";
import "../styles/components/Contacto.css";

const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/8890d630-636a-11ed-891b-4f350712a1f0";

const Contacto = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <div id="contacto" className="contacto-container">
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
            >
                <h1>Contáctanos</h1>
                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Nombre"
                        name="name"
                        className=""
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                        type="email"
                        placeholder="Correo"
                        name="email"
                        className=""
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <textarea
                        placeholder="Mensaje"
                        name="message"
                        className=""
                        required
                    />
                </div>
                <div className="">
                    <button className="" type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contacto;
