
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useTool } from "../components/ContextTools"

export function ChoseSubject(){
    const {Open}=useTool()
   const subjects = ["select your subject",'arts','animals','fiction','science&mathematics','history','health']
   const [subject,setSubject]=useState("") 
   
   const [data,setData]=useState([])
   const [randomSubject,setRandom]=useState()
   const navigate=useNavigate() 
   async function getData(subject){
       const url = `https://www.googleapis.com/books/v1/volumes?q=${subject}&filter=ebooks&key=AIzaSyBERYVOt_pqetW6ry2JwTUoJQS0M55oVfg&maxResults=40`;
      try {
        const response = await fetch(url);
        const data = await response.json()
        console.log(data.items)
        setRandom(subject)
        const OurBooks=data.items.map((element)=> {    
           return (
           {img:element.volumeInfo.imageLinks.thumbnail,
            book:element.volumeInfo.title ,
            id:element.id
 
           }
           )})
        setData(prev=>OurBooks);
      } catch (error) {
        console.error(error); 
      } 
      } 
      // let randomSubject=subjects[Math.floor(Math.random()*5+1)]
     useEffect(() => {
      let random=subjects[Math.floor(Math.random()*5+1)]
       getData(random)
      
     }, [])
  
   const handleOptionChange = (event) => {
      const selectedValue = event.target.value;
      setSubject(selectedValue);
    };

    return (
      <div className="choseSubject" style={{marginLeft:Open? "280px":"80px",transition:" margin 300ms"}}>
         <div className="containerChosebox"> 
         <input className="Chosebox" value={subject} onChange={handleOptionChange}placeholder="  Search for your Book..." />
         <p>|</p>
        <Link to={`/books/${subject}`}> 
            <button  >  <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
      color="white"
    >
      <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
    </svg></button>
        </Link>
        
        </div>
            <div className="containerMain">
                {data.map((element)=>
               { return (
                    
                    <div key={element.id} className="oneBook">
                        <button onClick={(event)=>{
                            navigate(`/books/${randomSubject}/${event.target.id}`)
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