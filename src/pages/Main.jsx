import { useNavigate } from "react-router-dom"
import { useTool } from "../components/ContextTools"
import "../components/init"

export default function Main(){
    const navigate=useNavigate()
    const {Open}=useTool()
    return(
        <div className="Main" style={{marginLeft:Open? "160px":"80px",transition:" margin 300ms"}}>
            
            <img src="./src/assets/background1.png" alt="" />
             <button onClick={()=>navigate("/books")}>Get Your Book</button>
        </div>
    )
}