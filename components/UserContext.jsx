"use client"
import { list_all } from "./Supabase";
import { createContext, useState, useEffect } from "react";

//const dataFixed = await list_all();
//const [contactos, setContactos] = useState()
//const dataFixed = lazy(async () => await list_all);
export const DataContext = createContext();

export default function DataProvider({ children }){
    const [users,setState] =  useState();
    const [userId, setUserId] = useState();
    // trigger getInitialValues only on component init using useEffect
    useEffect(() => {
       (async function () {
           const data = await list_all();
           
           setState(data);
       }())
    }, []); 

    return(
        <DataContext.Provider value={{
            users,
            setState,
            userId,
            setUserId
        }}>
            { children }
        </DataContext.Provider>
    )

}