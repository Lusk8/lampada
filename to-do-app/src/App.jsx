import { useState } from "react"

import "./app.css"

import lampadaAcesa from "./assets/aCESA.png"

import lampadaApagada from "./assets/Apagada.png"




function App() {
const[desligada, setAcesa] = useState(false);
const handleClick = () => {setAcesa(!desligada);};

return (
<> <div>

<button onClick={handleClick}>{desligada ? 'DESLIGAR' : 'LIGAR'}</button>
<img src={desligada ? lampadaAcesa : lampadaApagada} alt = "Lâmpada"/>
</div>
</>)

}


export default App
