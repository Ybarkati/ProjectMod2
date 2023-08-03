import { GrClipboard } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import { useHelp } from './contextHelp'
export default function Answer({key,model}){
    const navigate=useNavigate()
    const {setHelp}=useHelp()
    return (
        
            
            <div key={key} className={model.sender}>
            {model.sender=="ChatGPT" ? <button onClick={()=>
                {setHelp(model.message)
                navigate("/MyNote/Help")}}><GrClipboard/></button> : null}
                <p>{model.message}</p>
            </div>
              
        
    )
}