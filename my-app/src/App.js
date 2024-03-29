
import './index.css';
// import {useState} from 'react';
// import Employee from './components/Employee'
// import {v4 as uuidv4} from 'uuid';
// import AddEmployee from './components/AddEmployee';
// import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Employees from './pages/Employees';
import Dictionary from './components/Dictionary';

function App() {

return (
<BrowserRouter>
<Header>
    <Routes>
      <Route path='/employees' element={<Employees/>}/>
      <Route path='/dictionary' element={<Dictionary/>}/>
    </Routes>
  
</Header>
</BrowserRouter>
);
}

export default App;
