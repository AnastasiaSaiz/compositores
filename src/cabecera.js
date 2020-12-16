import { Link } from "react-router-dom"

const Cabecera = () => {
    return (
        <>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/eliminar">Eliminar</Link></li>
            </ul>
        </>
    )
};
export default Cabecera;