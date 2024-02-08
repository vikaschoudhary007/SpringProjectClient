import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Authentication/Auth';
import HomePage from './pages/HomePage/HomePage';
import Messages from './pages/Messages/Messages';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import { useEffect } from 'react';
import { getProfileAction } from './redux/User/user.action';

function App() {

  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");
  const {user} = useSelector(store => store);

  useEffect(() => {
    dispatch(getProfileAction(jwt));

  },[jwt])

  return (
   <div>
      <Router>
        <Routes>
          <Route path='/' element={user.user ? <HomePage /> : <Auth />}/>
          <Route path='/' element={<HomePage />}/>
          <Route path='/message' element={<Messages />}/>
          {/* <Route path='/*' element={<Auth />}/> */}
        </Routes>
      </Router>
   </div>
  );
}

export default App;
