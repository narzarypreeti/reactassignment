import React, {useState} from 'react'
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import { multiStepContext } from '../StepContext';


export default function Socialmedia() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    const [ inputList, setinputList ] = useState([ {socialMedia:'', projecDesc:'', techUsed:'' }])

    const handleaddClick= ()=>{
         setinputList([...inputList, {socialMedia:'', projecDesc:'', techUsed:'' } ])
   
    }
    return (
        
            inputList.map((inputList,index) =>{
      return (
        <div>
            <div>
                <TextField
                    id='social-media'
                    label='Social Media Link'
                    value={userData['social-media']}
                    onChange={(e)=>setUserData({...userData, "social-media" : e.target.value})}
                    variant='outlined'
                    placeholder='Enter the Social Media name'
                    fullWidth
                    margin='normal'
                    name='socialMedia'
                    />
            </div>

            <div>
            <Button 
                    variant='contained' 
                    color='warning'
                    onClick={()=>setStep(4)}>
                        Back</Button>  <span> </span>

            <Button
                    variant='contained' 
                    color='warning' 
                    onClick={(handleaddClick)}>
                        Add More</Button> <span> </span>      

            <Button
                    variant='contained' 
                    color='secondary' 
                    onClick={()=>setStep(6)}>
                        Submit</Button>  
                
            </div>
          
        </div>
       
       )}) 
       );
     }
