
import './index.css';
import {useState} from 'react';
import Employee from './components/Employee'
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, SetEmployees] = useState(
    [
      {
      name: 'Santiago S. Hernandez',
      role: "CEO", 
      img: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
      name: 'Jose L. Martinez',
      role: "Investigative Journalist", 
      img: "https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
      name: 'Christopher M. Umana',
      role: "Developer", 
      img: "https://images.pexels.com/photos/16552837/pexels-photo-16552837/free-photo-of-man-in-worker-helmet-at-gym.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
      name: 'Nickolas D. Jacob',
      role: "Genius", 
      img: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
      name: 'Nayeli C Rodriguez',
      role: "Developer", 
      img: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
      name: 'Fernanda Barron',
      role: "Developer", 
      img: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
      name: 'Santiago',
      role: "Developer", 
      img: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  );
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
        {employees.map((employee) => {
          console.log(uuidv4());
          return (
          <Employee
            key={uuidv4()}
            name={employee.name}
            role={employee.role}
            img = {employee.img}
          />);
        })}
      </div>
      </>
      ):(
        <p> you cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
