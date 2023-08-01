import React from "react";
import { useTextEditor } from "./context"; 
import DOMPurify from 'dompurify'
export default function FileDisplay(){
  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }
  const {TextFile,deleteFile}=useTextEditor()
  return(
    <div className="ContainerOfTextFile">
      {TextFile.map((element)=>
       (
        <div className="textFileContainer">
                 <button className="delete" onClick={() => deleteFile(element)}>X</button> 
        <div 
        className="oneFile"
        key={element} 
          dangerouslySetInnerHTML={createMarkup(element)}

        ></div>
        </div>
        )
      )}
    </div>
  )
}
// {TextFile.map((element)=>
// (<div
//   key={element}
//   dangerouslySetInnerHTML={createMarkup(element)}>
//   >

//   </div>)
//   )}