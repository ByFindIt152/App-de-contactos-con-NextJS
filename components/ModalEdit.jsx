"use client"

//---------------------------------------------------------------
// Importando Librerias
import { useId, useState, createContext, useContext } from "react"
import { list_all,update_data } from "./Supabase"
import { DataContext } from "./UserContext"
//---------------------------------------------------------------

export default function ModalEdit() {

    const { userId,setState } = useContext(DataContext)

    const [details, setDetails] = useState({
        first_name: "",
        last_name: "",
        em: "",
        ail: "",
        avatar: "",
        username: "",
        description: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };

    async function handleSubmit(event) {
        event.preventDefault();
        await update_data(userId,details.first_name, details.last_name, details.em + "@" + details.ail, details.avatar, details.username, details.description);
        alert("Registro Actualizado");
        const data = await list_all();
        setState(data);
        console.log("Debug:\r\n", details);
    }

    return (
        <div className="modal fade" id="editarModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Editar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Nombre, Apellido</span>
                                <input onChange={handleChange} name="first_name" id="first_name" type="text" aria-label="First name" className="form-control" />
                                <input onChange={handleChange} name="last_name" id="last_name" type="text" aria-label="Last name" className="form-control" />
                            </div>

                            <div className="input-group mb-3">
                                <input onChange={handleChange} name="em" id="em" type="text" className="form-control" placeholder="Nombre" aria-label="Username" />
                                <span className="input-group-text">@</span>
                                <input onChange={handleChange} name="ail" id="ail" type="text" className="form-control" placeholder="Server.com" aria-label="Server" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label">El Url De tu Avatar</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1">Url</span>
                                    <input onChange={handleChange} type="text" className="form-control" name="avatar" id="basic-url" aria-describedby="basic-addon3 basic-addon4" placeholder="https://example.com/users/" />
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">@</span>
                                <input onChange={handleChange} name="username" id="username" type="text" className="form-control" placeholder="Nombre de Usuario" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                            <div className="input-group">
                                <span className="input-group-text">Descripcion</span>
                                <textarea onChange={handleChange} name="description" id="description" className="form-control" aria-label="With textarea"></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" className="btn btn-success">Añadir</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}