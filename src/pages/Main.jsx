import { useTool } from "../components/ContextTools"
import "../components/init"

export default function Main(){
    const {Open}=useTool()
    return(
        <div style={{color:"white",fontSize:"50px",marginLeft:Open?"280px":"80px"}}>
            This is the main Page 
        </div>
    )
}