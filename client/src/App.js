import * as bootstrap from 'bootstrap'

import Login from './components/Login';
import Signup from './components/Signup';
import {Route,BrowserRouter, Routes,} from "react-router-dom";
import { Profile } from './components/Profile';
function App() {
 return( 
  
  <Routes>
    <Route path='*' element={<Login/> }/>,  
    <Route path='signup' element={<Signup/>} />
    <Route path='profile' element={<Profile/>} />
  </Routes >
  
);
}

export default App
