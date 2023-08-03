import { useLayoutEffect, useState } from "react";
import { useTool } from "../components/ContextTools"
import "../components/init"
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
         console.log(OurBooks[0].accessInfo.pdf,"heerere---------------------")
        
         setInfoBook({
           more:OurBooks[0].volumeInfo.previewLink,
            title:OurBooks[0].volumeInfo.title,
            pdf:OurBooks[0].accessInfo.pdf ,
            description:OurBooks[0].volumeInfo.description,
            img:OurBooks[0].volumeInfo.imageLinks.thumbnail
         })
       } catch (error) {
         console.error(error); 
       } 
       } 
       const handleRedirect = () => {
        if (infoBook.pdf.isAvailable){
          console.log(infoBook.pdf.isAvailable,infoBook.pdf.acsTokenLink)
          const externalSiteUrl =infoBook.pdf.acsTokenLink || infoBook.pdf.downloadLink
          window.open(externalSiteUrl, 'externalSiteWindow', 'width=800,height=600')
          console.log(externalSiteUrl)
        }
      };
      const handleRedirectMore = () => {
        if (infoBook.more){
          const externalSiteUrl =infoBook.more
          window.open(externalSiteUrl, 'externalSiteWindow', 'width=800,height=600')
          console.log(externalSiteUrl)
        }
      };
      useLayoutEffect(() => {
        getbook(params.symbol)
      }, [])
    return (
        <div className="currentBook" style={{marginLeft:Open? "160px":"80px",transition:" margin 300ms"}}>
            
            
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
                   {infoBook.pdf? <>{infoBook.pdf.isAvailable? <>                   <button style={{marginTop:"10px"}} onClick={handleRedirect}>Download</button>
</>:""}</>:""}
                     {infoBook.more?  <button style={{marginTop:"10px"}} onClick={handleRedirectMore}>See more</button>:""}
                     <button style={{marginTop:"10px"}} onClick={()=>navigate(`/MyNote/${infoBook.title}`)}>take note</button>

               </div>

                <div className="InfoBookRight">
                   <h1>{infoBook.title}</h1>
                   <p><span>Description:   </span><br/>{infoBook.description}</p>
                </div>
            </div>
        </div>
    )
}