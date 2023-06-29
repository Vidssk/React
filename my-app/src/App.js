
import './index.css';
import {useState} from 'react';
import Employee from './components/Employee'

function App() {
  const [role, setRole] = useState('dev');
  console.log('we are about to list the employees');
  const showEmployees = true;
  return (
    <div className = "App bg-red-300">
      {showEmployees ? 
      (
      <>
      <input type='text' onChange={(e) => {
        console.log(e.target.value);
        setRole(e.target.value);
      }}
      />
        <Employee name="Santiago" role="Intern"/>
        <Employee name="Chris" role={role}/>
        <Employee name="Jose" role="Intern"/>
      </>
      ):(
        <p> you cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
