import { useContext,createContext } from "react";
import { useState } from "react";
const HelpContext=createContext()
export function useHelp(){
    return (
        useContext(HelpContext)
    )
}

export default function HelpProvider(props){
    const [Help,setHelp]=useState("")
    const HelpValue={
          Help,
          setHelp
    }
    return (
        <HelpContext.Provider value={HelpValue}>
              {props.children}
        </HelpContext.Provider>
    )
}