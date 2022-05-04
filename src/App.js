import React, { useContext } from 'react'
import './App.css';
import Profile from './Components/Profile';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Socialmedia from './Components/Socialmedia';
import GetData from './Components/GetData';

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { multiStepContext } from './StepContext';

function App() {

  const { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step){
    switch(step){
      case 1 :
        return <Profile/>
      case 2 :
        return <Education/>
       
      case 3 :
        return  <Skills/>
        
      case 4 :
        return <Projects/>
        
      case 5 :
        return <Socialmedia/>

        default: return " Submitted ";
    }
  }
  return (
    
    
    <div className="App">
      <header className="App-header">
      <AppBar position="static" style= {{backgroundColor: "teal"}}>
          <Typography variant="h5" color="white" component="div">
          <h3 style={{color:'white', fontSizeAdjust: 7 , textDecoration:'underline'}}>Build your Resume here</h3>
          <AssignmentIcon  style={{ fontSize: 40 }} aria-label="assignment" color="inherit"></AssignmentIcon>
          </Typography>
       
      </AppBar>
        
        <>
          <CssBaseline/>
            <Container component={Box} p={5}>
              <Paper component={Box} p={5}>
            
                <div className="center-stepper">
                  <Stepper style={{ width: '98%' }} activeStep= {currentStep - 1} orientation="horizontal">
                  
                      <Step>
                        <StepLabel></StepLabel>
                      </Step>

                      <Step>
                        <StepLabel></StepLabel>
                      </Step>

                      <Step>
                        <StepLabel></StepLabel>
                      </Step>

                      <Step>
                        <StepLabel></StepLabel>
                      </Step>

                      <Step>
                        <StepLabel></StepLabel>
                      </Step>

                  </Stepper>
              
                </div>
                    
                {showStep(currentStep)}
                {finalData.length > 0 ? <GetData/> : ""}
                <GetData/>
                </Paper>
                </Container>
          </>
    
        </header>
      </div>
      
  );
}

export default App;
