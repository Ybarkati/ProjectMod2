import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useTool } from "../components/ContextTools"
import "../components/init"
import background1 from "../assets/background1.png"

export default function Main(){
    const navigate=useNavigate()
    const {Open}=useTool()
    
    return(
        <div className="Main" style={{marginLeft:Open? "160px":"80px",transition:" margin 300ms"}}>
            
            <img src={background1} alt="" />
             <button onClick={()=>navigate("/books")}>Get Your Book</button>
        </div>
    )
}