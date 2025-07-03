import './App.css'
import HomePage from './components/Homepage/HomePage.jsx'
import Navbar from './components/SideBar.jsx'
import { Route,Routes } from 'react-router'
import Timeline from './components/Timeline.jsx'
import CalendarPage from './components/Calendar.jsx'
import AddEvent from './components/AddEventPage.jsx'
import SearchEventPage from './components/SearchEventPage/SearchEventPage.jsx'
function App() {
 
  return (
    <>
    <Routes>
      <Route index path='/' element={<HomePage/>} />
      <Route path='/Calendar' element={<CalendarPage/>} />
      <Route path='/Home' element={<HomePage/>} />
      <Route path='/Add Event' element={<AddEvent/>}/>
      <Route path='/Search Events' element={<SearchEventPage/>}/>
    </Routes>
    </>
  )
}

export default App
