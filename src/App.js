import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState();
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    },
    {
      id: 2,

      name: "Caleb",
      role: "Manager",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      id: 3,

      name: "Caleb",
      role: "Director of Engr.",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      id: 4,

      name: "Caleb",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg",
    },
    {
      id: 5,

      name: "Caleb",
      role: "The Devops Guy",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
    {
      id: 6,

      name: "Caleb",
      role: "Senior",
      img: "https://images.pexels.com/photos/1642161/pexels-photo-1642161.jpeg",
    },
  ]);

  const updateEmployee = (id, newName, newRole) => {
    const updatedEmployee = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployee);
  };

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You can not see the employees</p>
      )}
    </div>
  );
}

export default App;
