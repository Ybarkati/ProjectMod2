import { useState } from "react"
export default function AnswerInput({onSubmit}){
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
            <form onSubmit={handleSubmit}>
            <input id="name" value={input} onChange={handleChange}  placeholder="feel free to ask any question"/>
            <button onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}