"use client"
//---------------------------------------------------------------
import { useRouter } from 'next/navigation'
import { useContext } from 'react';
import BtnDelete from './BtnDelete';
import { DataContext } from './UserContext';
import useViewport from './ViewPort';
//---------------------------------------------------------------

//export default async function Users({ users }) {
export default  function Users() {    
    const { users, setData, userId, setUserId } = useContext(DataContext)
     //console.log("\r\n",JSON.stringify(users),"\r\n")
     console.log("\r\n",JSON.stringify(users),"\r\n")
     const router = useRouter();
    
    return (
        <ul className='list-group'>
            {   
                users?.map((user) => (
                    <li key={user.id} className='p-1 list-group-item list-group-item-action hvr-grow d-flex align-content-center flex-wrap flex-row justify-content-around align-items-center mb-4' style={{
                        borderRadius: "6px",
                        border: "solid 1px #AEAEAF",
                        boxShadow: "2px 4px 2px whitesmoke",
                    }}>
                        <div className="d-flex flex-column p-2 m-2 align-items-start flew-wrap">                            
                        <button onClick={()=>{
                            setUserId(user.id.toString());
                            console.log("ID DEL USUARIO\r\n"+userId,"\r\n",typeof(userId))
                        }} type="button" className="btn btn-outline-secondary btn-sm mb-2 fs-3 hvr-pulse " data-id={user.id} data-bs-toggle="modal" data-bs-target="#editarModal"><i className="fa-solid fa-pen-to-square"></i></button>
                        <BtnDelete userId={user.id}/>
                        </div>
                        <div className="d-flex flex-column align-items-center" style={{ cursor: "pointer", }}
                            onClick={
                                () => {
                                    router.push(`/users/${user.username}`)
                                }
                            } >
                            <i className="fa-regular fa-id-card fs-2 mb-2"></i>
                            <h5>{user.id}| {user.first_name}, <b>{user.last_name}</b></h5>
                            <p>{user.email}</p>
                        </div>
                        <img width="130" height="130" src={user.avatar} alt={user.email} style={
                            {
                                borderRadius: "25%",
                                border: "solid 1px whitesmoke",
                                boxShadow: "1px 2px 4px gray",
                            }
                        } />
                    </li>
                ))
            }
        </ul>
    )
}