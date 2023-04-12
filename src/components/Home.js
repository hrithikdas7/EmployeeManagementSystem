import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Employee from '../Employee';
import { useNavigate,Link } from 'react-router-dom';





function Home() {
   const navigate = useNavigate()



   const handleDelete= (empId)=>{
    console.log(empId);
  let index= Employee.map((item)=>item.empId).indexOf(empId)
  console.log(index);
  Employee.splice(index,1)
  navigate('/');
 
  }
  const handleEdit =(empId,empName,empDesg,empSalary)=>{
    localStorage.setItem("empId",empId)
    localStorage.setItem("empName",empName)
    localStorage.setItem("empDesg",empDesg)
    localStorage.setItem("empSalary",empSalary)




   }
  return (
    <div className='container'>
    
     <h1 className=' text-primary my-5 '>
    
       
        List of Employees &nbsp;
    
        <Link to={'/add'}><Button variant='success'><i class="fa-solid fa-user-plus"></i> Add</Button></Link>
        
        
        </h1>
        <p style={{'text-align':'justify'}}>This website helps the is for the Hr tea of abc group of companies to manage the employees data</p>
    <div style={{margin:"8rem"}}>
    
      <Table striped bordered hover variant="dark">
      <thead>
    
       <tr>
         
          <th>Employee Name</th>
          <th>Employee Desgnation</th>
          <th>Employee Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       { 
       Employee && Employee.length>0 ?
       Employee.map((item)=>(

        <tr>
        
        <td>{item.empName}</td>
        <td>{item.empDesg}</td>
        <td>{item.empSalary}</td>
        <td>
         <Link to={'/edit'}>
            <Button onClick={()=>handleEdit(item.empId,item.empName,item.empDesg,item.empSalary)} variant='warning'><i class="fa-solid fa-user-pen"></i></Button>
            </Link>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={()=>handleDelete(item.empId)} variant='danger'><i class="fa-solid fa-trash"></i></Button>
        </td>
      </tr>


       ))
       :"No data to display"
       
       
       
       }
        
        
      </tbody>
    </Table>


    </div>
    </div>
  )
}

export default Home