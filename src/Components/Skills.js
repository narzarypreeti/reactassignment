import React from 'react'
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { multiStepContext } from '../StepContext';

export default function Skills() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const [ inputList, setinputList ] = useState([ {skill:'', status:'', languages:'' }])

    const handleaddClick= ()=>{
         setinputList([...inputList, {skill:'', status:'', languages:'' } ])
        }

    return (
        
            inputList.map((inputList,index) =>{
                return(
        
            <div>
                <div>
                    <TextField
                    required
                        id='skill-name'
                        label='Skills'
                        value={userData['skill-name']}
                        onChange={(e)=>setUserData({...userData, "skill-name" : e.target.value})}
                        variant='outlined'
                        placeholder='Enter your skill'
                        fullWidth
                        margin='normal'
                        name='skill'
                        />
                </div>

                <div>
                    <TextField
                    required
                        id='status'
                        label='Skills status'
                        value={userData['status']}
                        onChange={(e)=>setUserData({...userData, "status" : e.target.value})}
                        variant='outlined'
                        placeholder='Enter your Experience status'
                        fullWidth
                        margin='normal'
                        name='status'
                        />
                </div>

                <div>
                    <TextField
                    required
                        id='languages'
                        label='Programming Languages'
                        value={userData['languages']}
                        onChange={(e)=>setUserData({...userData, "languages" : e.target.value})}
                        variant='outlined'
                        placeholder='Enter your last name'
                        fullWidth
                        margin='normal'
                        name='languages'
                        />
                </div>

                <div>
                <Button 
                        variant='contained' 
                        color='warning'
                        onClick={()=>setStep(2)}>
                            Back</Button>  <span> </span>

                <Button
                        variant='contained' 
                        color='warning' 
                        onClick={(handleaddClick)}>
                            Add More</Button> <span> </span>

                <Button
                        variant='contained' 
                        color='secondary' 
                        onClick={()=>setStep(4)}>
                            Next</Button>
                    
                </div>
            </div>
            )}) 
  );
}
