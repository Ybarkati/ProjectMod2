import { useContext,createContext } from "react";
import { useState } from "react";
const ToolContext=createContext()
export function useTool(){
    return (
        useContext(ToolContext)
    )
}

export default function ToolProvider(props){
    const [Open,setOpen]=useState(true)
    function handleOpen(){
        setOpen((prev)=>!prev)
    }
    const ToolValue={
          Open,
          handleOpen
    }
    
    return (
        <ToolContext.Provider value={ToolValue}>
              {props.children}
        </ToolContext.Provider>
    )
}