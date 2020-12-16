import { useState } from "react";

const EliminarCompositor = (props) => {
    const [text, setText] = useState("");
    const manageChange = (event) => {
        setText(event.target.value);
    }
    const borrar = () => {
        props.borrarCompositor(text);
    }
    return (
        <>
            <input type="text" value={text} onChange={manageChange} />
            <button onClick={borrar}>Borrar</button>
        </>
    )
};

export default EliminarCompositor;