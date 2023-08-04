import { useState } from "react"
import { useDarkMode } from "./ContextDarkMode"
export default function AnswerInput({onSubmit}){
    const {DarkMode}=useDarkMode()
    const [input,setInput]=useState("")
    function handleChange(event){
        setInput(event.target.value)
    }
    function handleSubmit(event){
       event.preventDefault()
            onSubmit(input) 
            setInput("")
           console.log(input)
    }
    return (
        <div className="ChatGPTInput">
            <form onSubmit={handleSubmit} >
            <input id="name" value={input} style={{boxShadow:!DarkMode && "2px 2px 10px black", color:!DarkMode && "black",backgroundColor:!DarkMode && "white"}} onChange={handleChange}  placeholder="feel free to ask any question"/>
            <button onClick={handleSubmit} style={{border:!DarkMode && "0px solid black",boxShadow:!DarkMode && "2px 2px 10px black", color:!DarkMode && "black"}}>submit</button>
            </form>
        </div>
    )
}