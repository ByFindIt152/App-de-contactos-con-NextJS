"use client"
//---------------------------------------------------------------
import { useRouter } from 'next/navigation'
import { useContext } from 'react';
import BtnDelete from './BtnDelete';
import { DataContext } from './UserContext';
import useViewport from './ViewPort';
import { RevealList,RevealWrapper } from 'next-reveal';
//---------------------------------------------------------------

export function MobileComponent(){
    const { users, setData, userId, setUserId } = useContext(DataContext)
    //console.log("\r\n",JSON.stringify(users),"\r\n")
    console.log("\r\n",JSON.stringify(users),"\r\n")
    const router = useRouter();

   return (
       <ul className='list-group'>
           {   
               users?.map((user) => (
                <RevealWrapper key={user.id} className="load-hidden" origin='left' interval={250} rotate={{x:  12,y:40,z:0}}  delay={200} duration={500}  reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
                   <li className='p-1 list-group-item list-group-item-action hvr-grow d-flex  flex-row  gap-2 align-items-center mb-4' style={{
                       borderRadius: "6px",
                       border: "solid 1px #AEAEAF",
                       borderRadius:"12px",
                       boxShadow: "2px 4px 2px whitesmoke",
                       height:"20vh"
                   }}>                 
                        <img onClick={
                               () => {
                                   router.push(`/users/${user.username}`)
                               }
                           } src={user.avatar} alt={user.email} style={                           {
                               width:"8rem",
                               height:"100%",
                               borderRadius:"6px",
                        }} />  
                       <div className="d-flex flex-column no-text-break align-items-start hvr-grow" style={{ cursor: "pointer", zIndex:"111",}}>
                            <h5 className='d-flex  mt-4 flexwrap gap-3'><i className="fa-regular fa-id-card fs-2"></i>{user.id}</h5>
                            <h5>{user.first_name}, <b>{user.last_name}</b></h5>
                            <p>{user.email}</p>
                       </div>
                       <div className="d-flex ms-5 flex-row gap-1 " style={{
                        position:"absolute",
                        top:"0",
                        right:"0",
                        zIndex:"99"
                        }}>                            
                       <button onClick={()=>{
                           setUserId(user.id.toString());
                           console.log("ID DEL USUARIO\r\n"+userId,"\r\n",typeof(userId))
                       }} type="button" className="btn btn-outline-secondary btn-sm mb-2 fs-3" data-id={user.id} data-bs-toggle="modal" data-bs-target="#editarModal"><i className="fa-solid fa-pen-to-square"></i></button>
                            <BtnDelete userId={user.id}/>
                       </div>
                    </li>
                   </RevealWrapper>
               ))
           }
       </ul>
   )
}

export function DesktopComponent(){
    const { users, setData, userId, setUserId } = useContext(DataContext)
    //console.log("\r\n",JSON.stringify(users),"\r\n")
    console.log("\r\n",JSON.stringify(users),"\r\n")
    const router = useRouter();



   return (
       <ul className='list-group'>
           {   
               users?.map((user) => (
                <RevealWrapper key={user.id}   className="load-hidden" origin='left' interval={250} rotate={{x:  12,y:40,z:0}}  delay={100} duration={500}  reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
                   <li className='p-1 list-group-item list-group-item-action hvr-grow d-flex align-content-center flex-wrap flex-row justify-content-around align-items-center mb-4' style={{
                       borderRadius: "6px",
                       border: "solid 1px #AEAEAF",
                       boxShadow: "2px 4px 2px whitesmoke",
                   }}>
                       <div className="d-flex flex-column p-2 m-2 align-items-start flew-wrap">                            
                       <button onClick={()=>{
                           setUserId(user.id.toString());
                           console.log("ID DEL USUARIO\r\n"+userId,"\r\n",typeof(userId))
                       }} type="button" className="btn btn-outline-secondary btn-sm mb-2 fs-3" data-id={user.id} data-bs-toggle="modal" data-bs-target="#editarModal"><i className="fa-solid fa-pen-to-square"></i></button>
                       <BtnDelete userId={user.id}/>
                       </div>
                       <div className="d-flex flex-column align-items-center hvr-grow" style={{ cursor: "pointer", }}
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
                </RevealWrapper>
               ))
           }
       </ul>
   )
}

//export default async function Users({ users }) {
export default  function Users() {    
    const {width} = useViewport();
    const breakpoint = 620;
    return width < breakpoint ? <MobileComponent/> : <DesktopComponent/>;
}