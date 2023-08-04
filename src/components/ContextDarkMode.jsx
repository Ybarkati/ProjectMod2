import { useContext,createContext ,useEffect} from "react";
import { useState } from "react";
const DarkModeContext=createContext()
export function useDarkMode(){
    return (
        useContext(DarkModeContext)
    )
}

export default function DarkModeProvider(props){
    const [DarkMode,setDarkMode]=useState(true)
    const DarkModeValue={
          DarkMode,
          setDarkMode
    }
    useEffect(() => {
        if (DarkMode){
            document.body.style.backgroundColor = '#000000';
        }else {
            document.body.style.backgroundColor = '#ffffff';
        }
        
    
        // If you want to change other styles as well, you can do it like this:
        // document.body.style.color = '#333';
        // document.body.style.fontFamily = 'Arial, sans-serif';
        // Don't forget to clean up the style on component unmount
        return () => {
          document.body.style.backgroundColor = '';
          // Remove other styles here if necessary
        };
      }, [DarkMode]);
    return (
        <DarkModeContext.Provider value={DarkModeValue}>
              {props.children}
        </DarkModeContext.Provider>
    )
}