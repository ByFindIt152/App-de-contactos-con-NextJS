import useViewport from "./ViewPort";

export function MobileComponent() {
    return (
        <ul className='list-group disable-select' data-bs-toggle="modal" data-bs-target="#añadirModal">
            <li className='p-1 list-group-item list-group-item-action hvr-grow d-flex align-content-center flex-wrap flex-row justify-content-around align-items-center' style={{
                borderRadius: "6px",
                border: "dashed 3px #D1D2CD",
                cursor: "pointer",
                height:"20vh"
            }}>
                <div className="d-flex flex-column align-items-center p-2" style={{
                    color: "#AEAEAF"
                }}>
                    <i className="fa-regular fa-plus mb-2" style={{ fontSize: "8vh" }}></i>
                    <h6 className="no-text-break" style={{ 
                        fontSize: "3vh", 
                        fontFamily: "monospace", 
                        textTransform: "lowercase",
                        }}>Añadir </h6>
                </div>
            </li>
        </ul>
    )
}

export function DesktopComponent() {
    return (
        <ul className='list-group disable-select' data-bs-toggle="modal" data-bs-target="#añadirModal">
            <li className='p-1 list-group-item list-group-item-action hvr-grow d-flex align-content-center flex-wrap flex-row justify-content-around align-items-center' style={{
                borderRadius: "6px",
                border: "dashed 3px #D1D2CD",
                cursor: "pointer",
            }}>
                <div className="d-flex flex-column align-items-center p-2" style={{
                    color: "#AEAEAF"
                }}>
                    <i className="fa-regular fa-plus mb-2" style={{ fontSize: "10vh" }}></i>
                    <h5 style={{ fontSize: "5vh", fontFamily: "monospace", textTransform: "lowercase" }}>Añadir nuevo contacto</h5>
                </div>
            </li>
        </ul>
    )
}


export default function BtnAdd(){
    const {width} = useViewport();
    const breakpoint = 620;
    return width < breakpoint ? <MobileComponent/> : <DesktopComponent/>;
}
