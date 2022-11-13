import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import GridGenerator from "./components/GridGenerator";
import Ayuda from "./components/Ayuda";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";

function App() {
    return (
        <div className="App">
            <HeaderComponent />
            <GridGenerator />
            <Ayuda />
            <Contacto />
            <Nosotros />
        </div>
    );
}

export default App;
