import React, { useState } from 'react'
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import { multiStepContext } from '../StepContext';

export default function Education() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    const [ inputList, setinputList ] = useState([ {courseName:'', instituteName:'', percentage:'', courseCompletion:'' }])

   
    const handleaddClick= ()=>{
         setinputList([...inputList, {courseName:'', instituteName:'', percentage:'', courseCompletion:'' } ])
   
    }
    return (
        
            inputList.map((inputList,index) =>{
                return(
        <div>
            <div>
            <TextField
            required
                id='course-name'
                label='Course Name'
                value={userData['course-name']}
                onChange={(e)=>setUserData({...userData, "course-name" : e.target.value})}     
                // onChange={ e=>handleinputchange(e, index)}          
                variant='outlined'
                placeholder='Enter your course name'
                fullWidth
                margin='normal'
                name='courseName'
            />
            </div>

            <div>
            <TextField
            required
                id='institute-name'
                label='Institute Name'
                value={userData['institute-name']}
                onChange={(e)=>setUserData({...userData, "institute-name" : e.target.value})}
                variant='outlined'
                placeholder='Enter your Institute name'
                fullWidth
                margin='normal'
                name='instituteName'
            />
            </div>

            <div>
            <TextField
            required
                id='percentage'
                label='Percentage/CGPA'
                value={userData['percentage']}
                onChange={(e)=>setUserData({...userData, "percentage" : e.target.value})}
                variant='outlined'
                placeholder='Enter your percentage'
                fullWidth
                margin='normal'
                name='percentage'
        />
            </div>

            <div>
            <TextField
            required
                id='course-completion'
                label='Course-completion-year'
                value={userData['course-completion']}
                onChange={(e)=>setUserData({...userData, "course-completion" : e.target.value})}
                variant='outlined'
                placeholder='Enter your year of course completion'
                fullWidth
                margin='normal'
                name='courseCompletion'
        />
            </div>

            <div>
            <Button 
                variant='contained' 
                color='warning'
                onClick={()=>setStep(1)}>
                    Back</Button> <span> </span>

            <Button
                variant='contained' 
                color='warning' 
                onClick={(handleaddClick)}>
                    Add More</Button> <span> </span>
                
            <Button
                variant='contained' 
                color='secondary' 
                onClick={()=>setStep(3)}>
                    Next</Button>
                
            </div>
        </div>
                
            )})         
        
  );
}
