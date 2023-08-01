import { useContext,createContext } from "react";
import { useState } from "react";
const TextEditorContext=createContext()
export function useTextEditor(){
    return (
        useContext(TextEditorContext)
    )
}

export default function TextEditorProvider(props){
    const [TextFile,setTextFile]=useState([])
    function addFile(element){
        setTextFile([...TextFile,element])
    }
    function deleteFile(deleteFile){
        let newFile = TextFile.filter((element) => element !== deleteFile)  
        setTextFile(newFile)
    }
    const TextEditorValue={
          TextFile,
          addFile,
          deleteFile
    }
    
    return (
        <TextEditorContext.Provider value={TextEditorValue}>
              {props.children}
        </TextEditorContext.Provider>
    )
}