
import '../index.css';
import {useState} from 'react';
import Employee from '../components/Employee'
import {v4 as uuidv4} from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';


// import './index.css';
// import {useState} from 'react';
// import Employee from './components/Employee'
// import {v4 as uuidv4} from 'uuid';
// import AddEmployee from './components/AddEmployee';
// import EditEmployee from './components/EditEmployee';
// import Header from './components/Header';

function Employees() {

  const [employees, SetEmployees] = useState(
    [
      {
      id: 0,
      name: 'Santiago S. Hernandez',
      role: "CEO", 
      img: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
      id: 1,
      name: 'Jose L. Martinez',
      role: "Investigative Journalist", 
      img: "https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
      id: 2,
      name: 'Christopher M. Umana',
      role: "Developer", 
      img: "https://images.pexels.com/photos/16552837/pexels-photo-16552837/free-photo-of-man-in-worker-helmet-at-gym.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
      id: 3,
      name: 'Nickolas D. Jacob',
      role: "Genius", 
      img: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
      id: 4,
      name: 'Ruben Aguilar',
      role: "Developer", 
      img: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
      id: 5,
      name: 'Fernanda Barron',
      role: "Developer", 
      img: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
      id: 6,
      name: 'Katy Aguilar',
      role: "Developer", 
      img: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
    );
    function updateEmployee(id, newName, newRole)
    {
      console.log('updateEmployee inside of app.js');
      const updatedEmployees = employees.map((employee)=> {
          if(id === employee.id) {
            return{...employee, name: newName, role: newRole}//spreading
            // return 
          }
          return employee;
        });
        SetEmployees(updatedEmployees);
    };
  function newEmployee(name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    SetEmployees([...employees, newEmployee]);
  };
  const showEmployees = true;
  return (
    <div className="App bg-gray-300 min-h-screen">
   
      {showEmployees ? 
      (
      <>
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => {
          // console.log(uuidv4());
          const editEmployee = <EditEmployee id={employee.id} name={employee.name} role={employee.role} updateEmployee={updateEmployee}/>
          return (
          <Employee
            key={employee.id}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            img = {employee.img}
            editEmployee={editEmployee}
          />);
        })}
      </div>
      <AddEmployee newEmployee={newEmployee}/>
      </>
      ):(
        <p> you cannot see the employees</p>
      )}
    </div>
  );
}

export default Employees;
