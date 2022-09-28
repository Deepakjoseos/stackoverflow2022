import './App.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import RoutePath from './components/RoutePath';
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users';
import Bot from './components/bot/Bot';

function App() {

const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchAllQuestions())
  dispatch(fetchAllUsers())
}, [dispatch])



  return (
    <div className="App">
      <Router>
      <Navbar />
      <RoutePath />
      <Bot />
      </Router>
    </div>
  );
}

export default App;
