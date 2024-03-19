"use client"

/*
https://stackoverflow.com/questions/23929432/submit-form-in-reactjs-using-button-element
https://stackoverflow.com/questions/64021110/react-modal-submit-form
https://www.freecodecamp.org/news/react-components-jsx-props-for-beginners/
https://stackoverflow.com/questions/53165945/what-is-usestate-in-react
https://enmascript.com/articles/2018/10/26/react-conf-2018-understanding-react-hooks-proposal-with-simple-examples
https://www.youtube.com/watch?v=v2GWfmZOeXI


*/

import { useId,useContext,useState } from "react"
import { list_all,insert_data } from "./Supabase"
import { DataContext } from "./UserContext";
/*
function get_values() {
const first_name = document.getElementById('first_name').value
const last_name = document.getElementById('last_name').value
const em = document.getElementById('em').value
const ail = document.getElementById('ail').value
const avatar = document.getElementById('avatar').value
const username = document.getElementById('username').value
const description = document.getElementById('description').value
console.log(
    first_name,
    last_name,
    em,
    ail,
    avatar,
    username,
    description
)

}
*/



export default function ModalAdd() {

    const { setState } = useContext( DataContext );


    const form = useId();
    /*
        const [first_name, setFN] = useState("");
        const [last_name, setLN] = useState("");
        const [em, setEm] = useState("");
        const [ail, setAil] = useState("");
        const [avatar, setUrl] = useState("");
        const [username, setUser] = useState("");
        const [description, setDesc] = useState("");
    */

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
        //await insert_data(details.first_name.toString(), details.last_name.toString(), details.em.toString() + "@" + details.ail.toString(), details.avatar.toString(), details.username.toString(), details.description.toString());
        await insert_data(details.first_name, details.last_name, details.em + "@" + details.ail, details.avatar, details.username, details.description);        
        console.log("Registro completado");
        const data = await list_all();
        setState(data);
        //await insert_data();
        console.log("Debug:\r\n", details);
    }

    /*const handleSubmit = (event) => {
        event.preventDefault();
        insert_data(details.first_name, details.last_name, details.em + "@" + details.ail, details.avatar, details.username, details.description)
        console.log("Debug:\r\n", details)
    }*/

    return (
        <div className="modal fade" id="añadirModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Añadir</h1>
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
                            <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Añadir</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
    /*
    return (
        <div className="modal fade" id="añadirModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Añadir</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Nombre, Apellido</span>
                                <input onChange={(e) => setFN(e.target.value)} value={first_name} id="first_name" type="text" aria-label="First name" className="form-control" />
                                <input onChange={(e) => setLN(e.target.value)} value={last_name} id="last_name" type="text" aria-label="Last name" className="form-control" />
                            </div>

                            <div className="input-group mb-3">
                                <input onChange={(e) => setEm(e.target.value)} value={em} id="em" type="text" className="form-control" placeholder="Nombre" aria-label="Username" />
                                <span className="input-group-text">@</span>
                                <input onChange={(e) => setAil(e.target.value)} value={ail} id="ail" type="text" className="form-control" placeholder="Server.com" aria-label="Server" />
                            </div>

                            <div className="mb-3">
                                <label for="basic-url" className="form-label">El Url De tu Avatar</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1">Url</span>
                                    <input onChange={(e) => setUrl(e.target.value)} value={avatar} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" placeholder="https://example.com/users/" />
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">@</span>
                                <input onChange={(e) => setUser(e.target.value)} value={username} id="username" type="text" className="form-control" placeholder="Nombre de Usuario" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                            <div className="input-group">
                                <span className="input-group-text">Descripcion</span>
                                <textarea onChange={(e) => setDesc(e.target.value)} value={description} id="description" className="form-control" aria-label="With textarea"></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="submit" className="btn btn-success" oncl>Añadir</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )*/
}