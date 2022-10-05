import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { users } from './redux/actions';
import './App.css'
import Bird from './Bird';
import Gamezone from './Gamezone';

function App() {
  return (
    <Gamezone />
  );
}

export default App;
