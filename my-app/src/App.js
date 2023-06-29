
import './index.css';
import {useState} from 'react';
import Employee from './components/Employee'

function App() {
  const [role, setRole] = useState('dev');
  console.log('we are about to list the employees');
  const showEmployees = true;
  return (
    <div>
      {showEmployees ? 
      (
      <>
      <input type='text' onChange={(e) => {
        console.log(e.target.value);
        setRole(e.target.value);
      }}
      />
      <div className="flex flex-wrap justify-center">
        <Employee name="Santiago" role="Intern" img="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Employee name="Chris" role={role}img="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Employee name="Jose" role="Intern" img="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Employee name="Santiago" role="Intern" img="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Employee name="Chris" role={role} img="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Employee name="Jose" role="Intern" img="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      </div>
      </>
      ):(
        <p> you cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
