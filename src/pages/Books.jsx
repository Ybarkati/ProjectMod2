import { Routes,Route } from "react-router-dom";
import { MainPage } from './MainPage';
import { ChoseSubject } from './ChoseSubject';
import { MyBook } from "./MyBook";

function Books() {
  
  return (
   
    <>
      <Routes>
        <Route path="/books/:symbol" element={<MainPage/>}/>
        <Route path="/books" element={<ChoseSubject/>}/>
        <Route path="/books:symbol/:symbol2" element={<MyBook/>}/>
      </Routes>
    </>
   
  )
}

export default Books