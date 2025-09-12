import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import HomeFeed from './components/HomeFeed'
import Profile from './components/Profile'
import { Navigate, Route, Routes, } from 'react-router-dom'
import CreatedPins from './components/CreatedPins'
import SavedPins from './components/SavedPins'
import AddNewPins from './components/AddNewPins'
import SignUp from './components/SignUp'
import TabNavigationHome from './components/TabNavigationHome'
import EditProfile from './components/EditProfile'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/_tabNavigationHome" element={<TabNavigationHome/>}>
          <Route index element={<Navigate to="homeFeed" replace />} />
           <Route path="homeFeed" element={<HomeFeed />} />
          <Route path="created1" element={<CreatedPins />} />
          <Route path="saved1" element={<SavedPins />} />
        </Route>   
        <Route path="/_profile" element={<Profile />}>
          <Route index element={<Navigate to="created" replace />} />
          <Route path="created" element={<CreatedPins />} />
          <Route path="saved" element={<SavedPins />} />
        </Route>
        
        <Route path="/_editProfile" element={<EditProfile />} />
        <Route path="/_addNewPins" element={<AddNewPins />} />
        <Route path="/_signUp" element={<SignUp />} />
       
      </Routes>
    </>
  )
}

export default App
