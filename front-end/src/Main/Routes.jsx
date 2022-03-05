import React from "react";
import {Routes, Route, Redirect} from 'react-router-dom'
import Home from '../components/Home/Home'
import UserCrud from '../components/users/UserCrud'

export default props => 
  <Routes>
    <Route exact path='/' element={<Home name="João" categoria='populares' />}/>
    <Route path='/users' element={<UserCrud />}/>
    <Route path='*' element={<Home name="João" categoria='populares' />}/>
  </Routes>
;