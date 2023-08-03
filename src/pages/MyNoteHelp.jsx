import React, { useEffect } from "react";
import { useTool } from "../components/ContextTools"
import "../App.css"
import FileDisplay from "../components/FileDisplay";
import "../components/init"
import MyNoteForHelp from "../components/MyNoteHelp";
import { useHelp } from "../components/contextHelp";
function MyNoteHelp() {
    const {Open}=useTool()
    const {Help,setHelp}=useHelp()
    useEffect(() => {
        setHelp("")
       }, [])
  return (
    <div className="MyNotePage" style={{marginLeft:Open? "160px":"80px",transition:" margin 300ms"}}>
      <MyNoteForHelp name={Help} />
      <FileDisplay/>
    </div>
  );
}

export default MyNoteHelp;