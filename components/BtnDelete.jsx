"use client"
import { useContext } from "react";
import { DataContext } from "./UserContext";
import { list_all, delete_data } from "./Supabase"

export default function BtnDelete(props){

    const { setState } = useContext( DataContext );

    return(
        <button onClick={async()=>{
            await delete_data(props.userId);
            const data = await list_all();
            setState(data);
         
        }} type="button" className="btn btn-outline-danger btn-sm mb-2 fs-3"><i className="fa-solid fa-trash"></i></button>
    )
}