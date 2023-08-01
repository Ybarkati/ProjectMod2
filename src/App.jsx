import NavBar from './components/NavBar'
import { MyBook } from './pages/MyBook'
import { ChoseSubject } from './pages/ChoseSubject'
import { MainPage } from './pages/MainPage'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Main from './pages/Main'
import "./components/init"
import MyNote from './pages/MyNote'
import MyNotePage from './pages/MyNote'
import MyNotePageForBook from './pages/MyNoteForBook'
import Help from './pages/Help'
function App() {
  return (
    <div className='App'>
       <NavBar/>
       <Routes>
       <Route path="/" element={<Main/>}/>
        <Route path="/books/:symbol" element={<MainPage/>}/>
        <Route path="/books" element={<ChoseSubject/>}/>
        <Route path="/MyNote" element={<MyNotePage/>}/>
        <Route path="/MyNote/:name" element={<MyNotePageForBook/>}/>
        <Route path="/books/:symbol/:symbol2" element={<MyBook/>}/> 
        <Route path="/Help" element={<Help/>}/>
      </Routes>
    </div>
      
  )
}

export default App
