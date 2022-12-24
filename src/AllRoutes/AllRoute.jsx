import {PrivateRoute} from "../AllRoutes/PrivateRoute"
import React from 'react'
import{Routes,Route} from "react-router-dom"
import Photos from '../components/ProfileComp/Photos'
import Exercise from '../Pages/exercise/Exercise'
import ExerciseDetails from '../Pages/exercise/ExerciseDetails'
import { Home } from '../Pages/Home'
import Login from '../Pages/Login'
import Muscle from '../Pages/Muscle'
import { Profile } from '../Pages/Profile'
import Signup from '../Pages/Signup'
import Community from "../components/Commynity"
import { Coach } from "../Pages/Coach"
import Blog from "../components/Blog"

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/login" element={<Login/>}> </Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path='/profile' element={<PrivateRoute> <Profile/> </PrivateRoute>} ></Route>
            <Route path='/exercise' element={<Exercise/>} ></Route>
            <Route path='/exercise/muscle' element={<Muscle/>} ></Route>
            <Route path='/profile/photos' element={<Photos/> }></Route>
            <Route path='/community' element={<Community/> }></Route>

            <Route path='/coach' element={<Coach/> }></Route>

            <Route path='/blog' element={<Blog/> }></Route>

            <Route path='/exercise/details/:id' element={<PrivateRoute> <ExerciseDetails/> </PrivateRoute>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoute