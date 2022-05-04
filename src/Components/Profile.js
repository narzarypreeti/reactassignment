import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import { multiStepContext } from '../StepContext';



export default function Profile() {
  
    const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    
    <div>
    
        <div>

            <TextField
            required
                id='first-name'
                label='First Name'
                value={userData['first-name']}
                onChange={(e)=>setUserData({...userData, "first-name" : e.target.value})}
                variant='outlined'
                placeholder='Enter your first name'
                fullWidth
                margin='normal'
                name='firstName'
          />
         
         </div>

        <div>
         <TextField
         required
            id='last-name'
            label='Last Name'
            value={userData['last-name']}
                onChange={(e)=>setUserData({...userData, "last-name" : e.target.value})}
            variant='outlined'
            placeholder='Enter your last name'
            fullWidth
            margin='normal'
            name='lastName'
            />
            </div>

        <div>
        <TextField
            id='address'
            label='Address'
            value={userData['address']}
                onChange={(e)=>setUserData({...userData, "address" : e.target.value})}
            variant='outlined'
            placeholder='Enter your address'
            fullWidth
            margin='normal'
            name='address'
            />
            </div>

        <div>
        <TextField
        required
            id='phone-number'
            label='Phone-Number'
            value={userData['phone-number']}
                onChange={(e)=>setUserData({...userData, "phone-number" : e.target.value})}
            variant='outlined'
            placeholder='Enter your phone number'
            fullWidth
            margin='normal'
            name='phoneno'
            />
            </div>

        <div>
        <Button
            variant='contained' 
            onClick={()=>setStep(2)}
            color='secondary' >Next</Button>

            {/* <Button 
            variant='contained' 
            color='primary'
            disab>back</Button> */}
        </div>
        
    </div>
    
  );
        
}

