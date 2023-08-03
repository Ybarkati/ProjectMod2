import { useContext,createContext,useEffect } from "react";
import { useState } from "react";
const TextEditorContext=createContext()
export function useTextEditor(){
    return (
        useContext(TextEditorContext)
    )
}

export default function TextEditorProvider(props){
    const [TextFile, setTextFile] = useState(() => {
    const savedTextFile = localStorage.getItem('TextFile');
    return savedTextFile ? JSON.parse(savedTextFile) : [];
  });

  useEffect(() => {
    const savedTextFile = localStorage.getItem('TextFile');
    if (savedTextFile) {
      setTextFile(JSON.parse(savedTextFile));
    }
  }, []); 
  useEffect(() => {
    localStorage.setItem('TextFile', JSON.stringify(TextFile));
  }, [TextFile]);
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