const Compositores = (props) => {
    const compositoresHTML = props.compositores.map(compositor => {
        return <li>{compositor.nombre}</li>
    })
    return <ul>{compositoresHTML}</ul>
};
export default Compositores;