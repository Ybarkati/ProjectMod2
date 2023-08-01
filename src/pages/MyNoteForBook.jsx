import React from "react";
import { useTool } from "../components/ContextTools"
import "../App.css"
import MyNoteForBook from "../components/MyNoteForBook";
import FileDisplay from "../components/FileDisplay";
import "../components/init"
import { useParams } from "react-router-dom";

function MyNotePageForBook() {
    const {Open}=useTool()
    const params=useParams()
  return (
    <div className="MyNotePage" style={{marginLeft:Open? "160px":"80px",transition:" margin 300ms"}}>
      <MyNoteForBook name={params.name} />
      <FileDisplay/>
    </div>
  );
}

export default MyNotePageForBook;