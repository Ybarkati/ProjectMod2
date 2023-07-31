import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {  useParams } from "react-router-dom";
import { useTool } from "../components/ContextTools"

export function MainPage(){
    const {Open}=useTool()

    const [data,setData]=useState([])
    const params=useParams()
    const navigate=useNavigate() 
    async function getData(subject){
        const url = `https://www.googleapis.com/books/v1/volumes?q=${subject}&filter=ebooks&key=AIzaSyBERYVOt_pqetW6ry2JwTUoJQS0M55oVfg&maxResults=40`;
       try {
         const response = await fetch(url);
         const data = await response.json()
         console.log(data.items)
         const OurBooks=data.items.map((element)=> {    
            return (
            {img:element.volumeInfo.imageLinks.thumbnail,
             book:element.volumeInfo.title ,
             id:element.id
  
            }
            )})
         console.log(OurBooks)
         setData(prev=>OurBooks);
       } catch (error) {
         console.error(error); 
       } 
       } 
       
      useEffect(() => {
        getData(params.symbol)
      }, [])
    return (
        <div className="containerOfConatainer" style={{marginLeft:Open? "160px":"80px",transition:" margin 300ms"}}>
            
            <div className='barTop'>
               <svg onClick={()=>navigate(`/books`)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0  150 70" aria-labelledby="title"
               aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink" width="70px" height="70px">
               <title>Angle Left Circle</title>
                <desc>A solid styled icon from Orion Icon Library.</desc>
               <path className='svg-icon' data-name="layer1"
               d="M64 32a32 32 0 1 0-32 32 32.001 32.001 0 0 0 32-32zM34.79 44.361L19.984 31.828 34.79 19.307a2 2 0 1 1 2.583 3.054l-11.195 9.47 11.196 9.478a2 2 0 1 1-2.585 3.052z"
                fill="#ffffff"></path>
              </svg>
                <h1>{params.symbol.toUpperCase()}</h1>
            </div>
            <div className="containerMain">
                {data.map((element)=>
               { return (
                    
                    <div key={element.id} className="oneBook">
                        <button onClick={(event)=>{
                            navigate(`/books/${params.symbol}/${event.target.id}`)
                        }}>
                          <img src={element.img} id={element.id} />
                           <p> {element.book}</p> 
                            
                         </button>
                    </div>
                )}
                )}
            </div>
        </div>
    )
}