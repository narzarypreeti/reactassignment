import React, { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { multiStepContext } from '../StepContext';

export default function GetData() {
    const { finalData } = useContext( multiStepContext )
  return (
    <div>
           <TableContainer style= {{display:'flex', justifyContent:'center'}}>
               <Table border="1" style = {{width:"70%", justifyContent:'center'}} size="small" aria-label="captain table">
                   <TableHead> 
                       <TableRow style={{backgroundColor: 'burlywood', color: 'aliceblue'}}>
                           <TableCell> First Name </TableCell>
                           <TableCell> Last Name </TableCell>
                           <TableCell> Address </TableCell>
                           <TableCell> Phone No </TableCell>
                           <TableCell> Course Name </TableCell>
                           <TableCell> Institute Name </TableCell>
                           <TableCell> Percentage  </TableCell>
                           <TableCell> Completion year </TableCell>
                           <TableCell> Skill Name </TableCell>
                           <TableCell> Skill status </TableCell>
                           <TableCell> Languages </TableCell>
                           <TableCell> Project Name </TableCell>
                           <TableCell> Project Desc </TableCell>
                           <TableCell> Tech Used </TableCell>
                           <TableCell> Social Media </TableCell>
                       </TableRow>       
                   </TableHead>
                   <TableBody>
                           {
                            finalData.map((data) =>(
                               <TableRow key = {data.phoneno}>
                                    <TableCell> data.firstName </TableCell>
                                    <TableCell> data.lastName </TableCell>
                                    <TableCell> data.address </TableCell>
                                    <TableCell> data.phoneno </TableCell>
                                    <TableCell> data.courseName </TableCell>
                                    <TableCell> data.instituteName </TableCell>
                                    <TableCell> data.percentage  </TableCell>
                                    <TableCell> data.courseCompletion </TableCell>
                                    <TableCell> data.skill </TableCell>
                                    <TableCell> data.status </TableCell>
                                    <TableCell> data.languages </TableCell>
                                    <TableCell> data.projectName </TableCell>
                                    <TableCell> data.projectDesc </TableCell>
                                    <TableCell> data.techUsed </TableCell>
                                    <TableCell> data.socialMedia </TableCell>
                               </TableRow>
                            ))}
                    
                   </TableBody>
               </Table>
          </TableContainer>
    </div>
  )
}
