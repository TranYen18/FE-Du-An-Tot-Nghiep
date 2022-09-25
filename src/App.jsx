
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import WebsiteLayout from './layouts/WebsiteLayout'
import HomePage from './pages/website/Home'
import BookingPage from './pages/website/BookingPage'
import Contact from './pages/website/Contact'
import PriceList from './pages/website/PriceList'


function App() {


  return (
   <>
    <div className="App">
         <Routes>
        <Route path="/" element={<WebsiteLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/price-list' element={<PriceList/>}/>
        </Route>
      </Routes>
    </div>
   </>
  )
}

export default App
