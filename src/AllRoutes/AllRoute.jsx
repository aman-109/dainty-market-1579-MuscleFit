import React from 'react'
import{Routes,Route} from "react-router-dom"
import Login from '../Pages/Login'
import { Profile } from '../Pages/Profile'
import Signup from '../Pages/Signup'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/login" element={<Login/>}> </Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path='/profile' element={<Profile/>} ></Route>
        </Routes>
    </div>
  )
}

export default AllRoute