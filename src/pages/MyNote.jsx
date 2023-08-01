import React from "react";
import { useTool } from "../components/ContextTools"
import "../App.css"
import MyNote from "../components/MyNote";
import FileDisplay from "../components/FileDisplay";
import "../components/init"
function MyNotePage() {
    const {Open}=useTool()
  return (
    <div className="MyNotePage" style={{marginLeft:Open? "160px":"80px",transition:" margin 300ms"}}>
      <MyNote />
      <FileDisplay/>
    </div>
  );
}

export default MyNotePage;