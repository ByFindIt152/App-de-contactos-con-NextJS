import { filter_data_by_username } from "../../../../components/Supabase"

export default async function UsersPage({ params }) {
    console.log(params.username)
    const filterData = await filter_data_by_username(params.username);
    const userData = filterData[0];
    console.log(`Datos filtrados: ${filterData}\r\nParametros:${params.username}\r\nDatos:${filterData[0]}`);
    /*
            <div className="row ms-auto">
            <div className="col-md-6 offset-md-3">
                <h4 className="container-fluid">Detalles de Usuario</h4>
                <h1><span class="badge bg-secondary">{userData.id}</span>{userData.username}</h1>
                <div className="card">
                    <div className="card-header text-center">
                        <img src={userData.avatar} alt={userData.email} style={{
                            width: "240px",
                            borderRadius: "6px"
                        }} />
                    </div>
                    <div className="card-body">
                        <h3> {userData.first_name}, {userData.last_name}</h3>
                        <p>{userData.email}</p>
                    </div>
                </div>
            </div>
        </div>
    */
    return (
        <div>
            <h6 style={{
                fontSize:"24px",
                marginTop:"6px",
                marginBottom:"6px",
                    
            }}>@{userData.username}</h6>
        <div style={{
            width:"100%",
            borderRadius:"16px",
            boxShadow:"0px 6px 3px gray"
            }} className="d-flex flex-column align-text-center align-items-center justify-content-center">
            <div style={{
                paddingTop:"38px",
                backgroundColor:"#212529",
                borderTopLeftRadius:"6px",
                borderTopRightRadius:"6px",
                width:"100%",
                height:"20vh",
                zIndex:"111",
                textAlign:"center"
                }}>
                <img src={userData.avatar} alt={userData.email} style={{
                    borderRadius:"100%",
                    border:"solid 2px #212529",
                    width:"140px",
                    margin:"12px 20px",
                }}/>
            </div>
            <div style={{
                padding:"12px 20px",
                paddingTop:"5rem",
                paddingBottom:"5rem",
                backgroundColor:"whitesmoke",
                border:"dashed 2px white",
                borderRadius:"12px"
                }} className="container d-flex flex-column align-text-center align-items-center">
                <h1>{userData.first_name} {userData.last_name}</h1>
                <div style={{}} className="d-flex flew-row gap-4 align-items-center">
                <h6 style={{
                    marginTop:"6px",
                    marginBottom:"6px",
                    paddingLeft:"12px",
                    }}>{userData.email}</h6>
                </div>

                <p>{userData.description}</p>
            </div>
        </div>
        </div>
    )
}