import { useState } from "react"

export const Semaforo = () => {
    // EXPLICAR USESTATE, siguiente linea
    const [color, setColor] = useState()
    return (
        <div>
            <div
                className="bg-dark d-flex flex-column align-items-center p-3"
                style={{ width: "1px", margin: "auto" }}>
            </div>
            <div
                className="bg-dark d-flex flex-column align-items-center p-3 rounded"
                style={{ width: "80px", margin: "auto" }}>
                
                <div
                    className="rounded-circle bg-danger m-2"
                    // {/* el color es rojo? true = el primer valor los dos puntos significa false */}
                    style={{ width: "50px", height: "50px", boxShadow: color == "rojo" ? "0 0 15px 5px red" : "none" }}
                    // {/* onclick es decir al clickear un elemento */}
                    onClick={() => setColor("rojo")}>
                </div>
                <div
                    className="rounded-circle bg-warning m-2"
                    style={{ width: "50px", height: "50px", boxShadow: color == "naranja" ? "0 0 15px 5px orange" : "none" }}
                    onClick={() => setColor("naranja")}></div>
                <div
                    className="rounded-circle bg-success m-2"
                    style={{ width: "50px", height: "50px", boxShadow: color == "verde" ? "0 0 15px 5px green" : "none" }}
                    onClick={() => setColor("verde")}>
                </div>
            </div>
        </div>
    )
}



//  <button
//                 className={`btn rounded-circle mb-2 ${color === "rojo" ? "btn-danger" : "btn-outline-dark"}`}
//                 style={{width: "50px", height: "50px"}}
//                 onClick={() => setColor("rojo")}
//             ></button>
//             <button
//                 className={`btn rounded-circle mb-2 ${color === "naranja" ? "btn-warning" : "btn-outline-dark"}`}
//                 style={{width: "50px", height: "50px"}}
//                 onClick={() => setColor("naranja")}
//             ></button>
//             <button
//                 className={`btn rounded-circle ${color === "verde" ? "btn-success" : "btn-outline-dark"}`}
//                 style={{width: "50px", height: "50px"}}
//                 onClick={() => setColor("verde")}
//             ></button>