import React from 'react'
import{Routes,Route} from "react-router-dom"
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/login" element={<Login/>}> </Route>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoute