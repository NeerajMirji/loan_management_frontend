import React from 'react';


import Home from './components/Home/Home';
import UserSignUp from './components/UserSignUp/UserSignup';
import EmployeeList from './components/EmployeeList';
import Login from './components/Login/Login';
import LoanCard from './components/LoanCard/LoanCard'
import AddUser from './components/AddUser/AddUser'
import {Route} from "react-router-dom"
import {Routes} from 'react-router-dom'
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUser/>} />
        <Route path="/AddUser" element={<AddUser/>} />
        <Route path="/UserSignUp" element={<UserSignUp/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
