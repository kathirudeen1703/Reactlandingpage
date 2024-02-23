import React, { useEffect, useState } from 'react'

function Api() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    const Apiusers= async()=>{
      try{
        const response= await fetch("https://dummy.restapiexample.com/api/v1/employees");
        const result = await response.json();
        setUsers(result.data)
    }
  catch(error){
    console.log("error");
  }
  };
  Apiusers();
},[]);
  return (
    <div>
      <h1>User Data:</h1>
      <table>
        {users.map((items)=>(
          <tr key={items.id}>
          <tr>
             <th>Employee Name</th>
             <th>Employee Salary</th>
             <th>Employee Age</th>
             <th>Images</th>
             </tr>
             
             <tr>
             <td>{items.employee_name}</td>
            <td>{items.employee_salary}</td>
           <td> {items.employee_age}</td>
            <td><img src={items.profile_image} alt='avatar'/></td>
            </tr>
            </tr>

        ))}
        
      </table>
    </div>
  )
}

export default Api
