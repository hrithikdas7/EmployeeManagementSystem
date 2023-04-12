import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import uuid from 'react-uuid';
import Employee from '../Employee';
import { useNavigate } from 'react-router-dom';



function Add() {
  const [empName,setName]=useState('')
  const [empDesg,setDesg]=useState('')
  const [empSalary,setSalary]=useState(0)
  const navigate = useNavigate()
  
  const handleSubmit = (event)=>{
    event.preventDefault()
    
    //genartare uuid
    const salary = Number(empSalary)
    const ids = uuid()
    let uniqueId =ids.slice(0,8)
    console.log(uniqueId);
    Employee.push({
      empId:uniqueId,
      empName,
      empDesg,
      empSalary:salary
    })
    navigate('/')
  }
  return (
    <div className='my-5 container'>
      
      <h1 className='text-primary'>Add New Employee Details</h1>
      
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHrn-aMu0VMyhtVsWIHuxF5e8Bf51hfgliA&usqp=CAU'></img>
      </div>
      <Form className='border mt-3 p-5 w-50 '>
      

      <Form.Group className="mb-3" controlId="formBasicName">
        
        <Form.Control type="text" placeholder="Enter employee Name" onChange={(event)=>setName(event.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDesg">
        
        <Form.Control type="text" placeholder="Enter employee Desgnation"  onChange={(event)=>setDesg(event.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSalary">
        
        <Form.Control type="text" placeholder="Enter employee Salary" onChange={(event)=>setSalary(event.target.value)} />
        
      </Form.Group>

     
      <Button onClick={(event)=>handleSubmit(event)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Add