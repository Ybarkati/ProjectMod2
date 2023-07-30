import { useEffect, useState } from "react";
import { useTool } from "../components/ContextTools"


import {  useNavigate, useParams } from "react-router-dom";
export function MyBook(){
    const {Open}=useTool()

    const navigate=useNavigate()
    const [infoBook,setInfoBook]=useState({})
    const params=useParams()
    async function getbook(subject){
        console.log(subject)
        const url = `https://www.googleapis.com/books/v1/volumes?q=${subject}&filter=ebooks&key=AIzaSyBERYVOt_pqetW6ry2JwTUoJQS0M55oVfg&maxResults=40`;
        try {
          const response = await fetch(url);
          const book = await response.json()
          const OurBooks=book.items.filter((element)=> 
              element.id==params.symbol2 
            )
         console.log(OurBooks[0],"heerere---------------------")
        
         setInfoBook({
            title:OurBooks[0].volumeInfo.title,
            description:OurBooks[0].volumeInfo.description,
            img:OurBooks[0].volumeInfo.imageLinks.thumbnail
         })
       } catch (error) {
         console.error(error); 
       } 
       } 
      useEffect(() => {
        getbook(params.symbol)
      }, [])
    return (
        <div className="currentBook" style={{marginLeft:Open? "280px":"80px",transition:" margin 300ms"}}>
            
            <div className="button">
            <button onClick={()=>navigate(`/books/${params.symbol}`)}>Go Back</button>

            </div>
            
            <div className="bookInfo">
                <div className="img">
                   <img src={infoBook.img}/>
            </div>

                <div className="InfoBookRight">
                   <h1>{infoBook.title}</h1>
                   <p><span>Description:   </span><br/>{infoBook.description}</p>
                </div>
            </div>
        </div>
    )
}