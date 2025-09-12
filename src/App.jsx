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
        {/*HomeFee Routes*/}
         <Route path="/_tabNavigationHome" element={<TabNavigationHome/>}>
          <Route index element={<Navigate to="homeFeed" replace />} />
           <Route path="homeFeed" element={<HomeFeed />} />
          <Route path="created1" element={<CreatedPins />} />
          <Route path="saved1" element={<SavedPins />} />
        </Route>   
        {/* <Route path="/_profile" element={<Profile />} /> */}
        <Route path="/_profile" element={<Profile />}>
          <Route index element={<Navigate to="created" replace />} />
          <Route path="created" element={<CreatedPins />} />
          <Route path="saved" element={<SavedPins />} />
        </Route>
        
        <Route path="/_editProfile" element={<EditProfile />} />
        <Route path="/_addNewPins" element={<AddNewPins />} />
        <Route path="/_signUp" element={<SignUp />} />
       
      </Routes>

      {/* <div style={{
  marginTop:"4%",
}}> */}
      {/* <HomeFeed/> */}
      {/* <Explore/> */}


      {/* </div> */}
      {/* <h1>Pinspire</h1> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* </div> */}
    </>
  )
}

export default App
