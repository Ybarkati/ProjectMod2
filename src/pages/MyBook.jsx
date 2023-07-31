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
        <div className="currentBook" style={{marginLeft:Open? "160px":"80px",transition:" margin 300ms"}}>
            
            {/* <div className="button">
            <button onClick={()=>navigate(`/books/${params.symbol}`)}>Go Back</button>

            </div> */}
            <div className='barTop'>
               <svg onClick={()=>navigate(`/books/${params.symbol}`)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0  150 70" aria-labelledby="title"
               aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink" width="70px" height="70px">
               <title>Angle Left Circle</title>
                <desc>A solid styled icon from Orion Icon Library.</desc>
               <path className='svg-icon' data-name="layer1"
               d="M64 32a32 32 0 1 0-32 32 32.001 32.001 0 0 0 32-32zM34.79 44.361L19.984 31.828 34.79 19.307a2 2 0 1 1 2.583 3.054l-11.195 9.47 11.196 9.478a2 2 0 1 1-2.585 3.052z"
                fill="#ffffff"></path>
                
              </svg>
              <h1>{infoBook.title}</h1>
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