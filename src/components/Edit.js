import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from '../Employee';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const [empName,setName]=useState('')
  const [empDesg,setDesg]=useState('')
  const [empSalary,setSalary]=useState(0)
  const [empId,setId]= useState('')

   
  
  const navigate= useNavigate()





  const handleUpdate =(event)=>{
    event.preventDefault()
    // find index number of emp id that should be updated
  let index = Employee.map((item)=>item.empId).indexOf(empId)
  let emp =Employee[index]
  emp.empId = empId
  emp.empName = empName
  emp.empDesg = empDesg
  emp.empSalary = empSalary
  navigate('/')

  }


  console.log(empName);
  console.log(empDesg);
  console.log(empSalary);
  console.log(empId);

  useEffect(()=>{
      setName(localStorage.getItem("empName"))
      setDesg(localStorage.getItem("empDesg"))  
      setSalary(localStorage.getItem("empSalary"))  
      setId(localStorage.getItem("empId"))   
  },[])

  return (
    
     
    <div className='my-5 container'>
      
      <h1 className='text-primary'>Update Employee Details</h1>
      
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHrn-aMu0VMyhtVsWIHuxF5e8Bf51hfgliA&usqp=CAU'></img>
      </div>
      <Form className='border mt-3 p-5 w-50 '>
      

      <Form.Group className="mb-3" controlId="formBasicName">
        
        <Form.Control type="text" value={empName} placeholder="Enter employee Name" 
          onChange={(event)=>setName(event.target.value)
          }
        />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDesg">
        
        <Form.Control type="text"  value={empDesg} placeholder="Enter employee Desgnation"    onChange={(event)=>setDesg(event.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSalary">
        
        <Form.Control type="text"  value={empSalary} placeholder="Enter employee Salary"  onChange={(event)=>setSalary(event.target.value)} />
        
      </Form.Group>

     
      <Button onClick={(event)=>handleUpdate(event)} variant="primary" type="submit">
        Update
      </Button>
    </Form>
    </div>
  )
   
  
}

export default Edit