import React, {useState} from 'react'
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import { multiStepContext } from '../StepContext';

export default function Projects() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    const [ inputList, setinputList ] = useState([ {projectName:'', projecDesc:'', techUsed:'' }])

    const handleaddClick= ()=>{
         setinputList([...inputList, {projectName:'', projecDesc:'', techUsed:'' } ])
   
    }
    return (
        
            inputList.map((inputList,index) =>{
                return(
        
            <div>
                <div>
                    <TextField
                    required
                        id='project-name'
                        label='Project Name'
                        value={userData['project-name']}
                        onChange={(e)=>setUserData({...userData, "project-name" : e.target.value})}
                        variant='outlined'
                        placeholder='Enter the Project name'
                        fullWidth
                        margin='normal'
                        name='projectName'
                        />
                </div>

                <div>
                    <TextField
                    required
                        id='description'
                        label='Project Description'
                        value={userData['description']}
                        onChange={(e)=>setUserData({...userData, "description" : e.target.value})}
                        variant='outlined'
                        placeholder='Enter Project description'
                        fullWidth
                        margin='normal'
                        name='projectDesc'
                        />
                </div>

                <div>
                    <TextField
                    required
                        id='tech-used'
                        label='Tech Stack used'
                        value={userData['tech-used']}
                        onChange={(e)=>setUserData({...userData, "tech-used" : e.target.value})}
                        variant='outlined'
                        placeholder='Enter the Tech stack used'
                        fullWidth
                        margin='normal'
                        name='techUsed'
                        />
                </div>

                <div>
                <Button 
                        variant='contained' 
                        color='warning'
                        onClick={()=>setStep(3)}>
                            Back</Button>  <span> </span>

                <Button
                        variant='contained' 
                        color='warning' 
                        onClick={(handleaddClick)}>
                            Add More</Button> <span> </span>

                <Button
                        variant='contained' 
                        color='secondary' 
                        onClick={()=>setStep(5)}>
                            Next</Button>
                    
                </div>
            </div>
       )}) 
       );
     }