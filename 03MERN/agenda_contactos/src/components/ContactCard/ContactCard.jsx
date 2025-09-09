import "./ContactCard.module.css"

const ContactCard = ({name, phone, onRemove, onActivate}) => {
    return (
        <>
            <div>
                <label>Nombre: {name}</label> | 
                <label> Telefono: {phone}</label> | 
                <button onClick={onRemove}>Eliminar</button>
                {/*<button onClick={onEdit}>Editar</button>*/}
                <button onClick={onActivate}>Desactivar</button>
            </div>
        </>
    );
}
export default ContactCard;