import { useContext,createContext ,useEffect} from "react";
import { useState } from "react";
const DarkModeContext=createContext()
export function useDarkMode(){
    return (
        useContext(DarkModeContext)
    )
}

export default function DarkModeProvider(props){
    // const [DarkMode,setDarkMode]=useState(true)
    
    const [DarkMode, setDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem('DarkMode');
        return savedDarkMode ? JSON.parse(savedDarkMode) :false;
      });
    
      useEffect(() => {
        const savedDarkMode = localStorage.getItem('DarkMode');
        if (savedDarkMode) {
          setDarkMode(JSON.parse(savedDarkMode));
        }
      }, []); 
      useEffect(() => {
        localStorage.setItem('DarkMode', JSON.stringify(DarkMode));
      }, [DarkMode]);
    useEffect(() => {
        if (DarkMode){
            document.body.style.backgroundColor = '#000000';
        }else {
            document.body.style.backgroundColor = '#ffffff';
        }
        return () => {
          document.body.style.backgroundColor = '';
        };
      }, [DarkMode]);
      const DarkModeValue={
        DarkMode,
        setDarkMode
      }
    return (
        <DarkModeContext.Provider value={DarkModeValue}>
              {props.children}
        </DarkModeContext.Provider>
    )
}