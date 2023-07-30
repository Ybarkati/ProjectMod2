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
        <div className="containerOfConatainer" style={{marginLeft:Open? "280px":"80px",transition:" margin 300ms"}}>
            <Link to="/books"><div>GO BACK</div></Link>
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