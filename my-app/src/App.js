
import './App.css';
import Employee from './components/Employee'

function App() {
  console.log('we are about to list the employees');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? 
      (<>
        <Employee />
      </>
      ):(
        <p> you cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
