//-------------------------------------------------------------------------------------------------------------------
import { createClient } from "@supabase/supabase-js";
//-------------------------------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------------------------------
// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://miau.supabase.co",
  "miau-key",
  { auth: { persistSession: false } }
);

const tableName = "contactos";

//-------------------------------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------------------------------
// Listar todos los registros
export async function list_all() {
  const { data: contactos } = await supabase.from(tableName).select("*");
  return contactos;
}
//-------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------------------
// Insertar Nuevo Registro
export async function insert_data(first_name,last_name,email,avatar,username,description) {
    try {
      //use camelcase and strings to refer the columns of the table
        const { data, error } = await supabase.from(tableName).insert([{"first_name": first_name,"last_name": last_name,"email": email,"avatar": avatar,"username": username,"description": description}]).select();
        //.insert([{ some_column: "someValue", other_column: "otherValue" }])
        //.insert([{"id":1,"first_name":"Raul","last_name":"Vargas","email":"raul@Vargas.com","avatar":"https://reqres.in/img/faces/8-image.jpg"}])        
    } catch (error) {
        console.log("Something gone wrong:\r\n",error)
    }
}
//-------------------------------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------------------------------
// Eliminar Registro
export async function delete_data(id) {
  try {
    const { error } = await supabase.from(tableName).delete().eq('id', id)  
    if(error){
      alert("Ocurrio un error:\r\n",error)
      console.log(error)
    }else{
      console.log("Registro Eliminado")
    }
  } catch (error) {
    
  }
  
}
//-------------------------------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------------------------------
export async function filter_data_by_id(id){
    const { data: contactos } = await supabase.from(tableName).select().eq('id', `${id}`);
  return contactos
}
//-------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------
export async function filter_data_by_username(username){
  try {
    let { data: contactos, error } = await supabase
    .from('contactos')
    .select("*")
    // Filters
    .eq('username', `${username}`)
    return contactos
  } catch (error) {
    console.log(`Error encontrado al filtrar datos: ${error}`)
  }

}
//-------------------------------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------------------------------
// Actualizar Registro
export async function update_data(id,first_name,last_name,email,avatar,username,description) {
  try {
    //use camelcase and strings to refer the columns of the table
      //const { data, error } = await supabase.from(tableName).insert([{"first_name": first_name,"last_name": last_name,"email": email,"avatar": avatar,"username": username,"description": description}]).select();
      const { error } = await supabase.from(tableName).update({"first_name": first_name,"last_name": last_name,"email": email,"avatar": avatar,"username": username,"description": description}).eq('id', id)
      //.insert([{ some_column: "someValue", other_column: "otherValue" }])
      //.insert([{"id":1,"first_name":"Raul","last_name":"Vargas","email":"raul@Vargas.com","avatar":"https://reqres.in/img/faces/8-image.jpg"}])        
      if(error){
        alert("Ocurrio un error:\r\n",error)
        console.log(error)
      }else{
        alert("Registro Eliminado")
      }
  } catch (error) {
      console.log("Something gone wrong:\r\n",error)
  }
}
//-------------------------------------------------------------------------------------------------------------------
