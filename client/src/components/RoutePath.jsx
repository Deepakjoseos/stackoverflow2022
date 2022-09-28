import React from 'react'
import { Routes, Route} from 'react-router-dom';
import AskQuestion from '../pages/askquestion/AskQuestion';
import Auth from '../pages/auth/Auth';
import LoginOTP from '../pages/auth/LoginOTP';
import Home from '../pages/home/Home';
import DisplayQuestion from '../pages/questions/DisplayQuestion';
import Questions from '../pages/questions/Questions';
import Tags from '../pages/tags/Tags';
import UserProfile from '../pages/userprofile/UserProfile';
import Users from '../pages/users/Users';

const RoutePath = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/Auth' element={<Auth />} />
        <Route  path='/Auth/otplogin' element={<LoginOTP />} />
        <Route  path='/Questions' element={<Questions />} />
        <Route  path='/Tags' element={<Tags />} />
        <Route  path='/Users' element={<Users />} />
        <Route  path='/AskQuestion' element={<AskQuestion />} />
        <Route  path='/Questions/:id' element={<DisplayQuestion />} />
        <Route  path='/Users/:id' element={<UserProfile />} />

    </Routes>
  )
}

export default RoutePath;