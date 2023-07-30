import NavBar from './components/NavBar'
import { MyBook } from './pages/MyBook'
import { ChoseSubject } from './pages/ChoseSubject'
import { MainPage } from './pages/MainPage'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Main from './pages/Main'
function App() {
  return (
    <div className='App'>
       <NavBar/>
       <Routes>
       <Route path="/" element={<Main/>}/>
        <Route path="/books/:symbol" element={<MainPage/>}/>
        <Route path="/books" element={<ChoseSubject/>}/>
        <Route path="/books/:symbol/:symbol2" element={<MyBook/>}/>
      </Routes>
    </div>
      
  )
}

export default App
