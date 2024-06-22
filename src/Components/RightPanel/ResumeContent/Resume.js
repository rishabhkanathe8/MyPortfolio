import * as React from 'react';
import Box from '@mui/material/Box';
import { ResumeStepper } from './ResumeStepper';
import { professionalSummery } from './ResumeUtils';
import { professionalExperience } from './ResumeUtils';
import { projects } from './ResumeUtils';
import { education } from './ResumeUtils';
import { certificate } from './ResumeUtils';
import './Resume.css'

export const Resume = () => {
  return (
    <div className='dp-resume-container'>
    {/* <Box sx={{ width: '100%' , maxWidth: { xs: '100%', md: 1000 } }}> */}
      <div className='dp-resume-wrapper'>
        <div className='dp-resume-left-column'>
        <ResumeStepper steps={professionalSummery}/>
        <ResumeStepper steps={education}/>
        <ResumeStepper steps={certificate}/>
        </div>
        <div className='dp-resume-right-column'>
        <ResumeStepper steps={professionalExperience}/>
        <ResumeStepper steps={projects}/>
        </div>
      </div>
     
    {/* </Box> */}
    </div>
  );
};



// Step data
// const steps = [
//   {
//     label: 'Sumary',
//     description: 
//       "E-PASS FACILITY is a WEB based Application which contains an E-Pass system to generate and approve or reject an electronic gate pass for student in the college premises. Using this Application students can apply gate pass and college faculties can approve or reject the Gate Pass. This WEB – APP helps in improving efficiency and provides a much easier and flexible way with maintaining the records in a much more systematic manner",
//   },
//   {
//     label: 'Sumary',
//     description: [
//       {
//         label :"Abcd",
//         description:"XYZ",
//       },
//       {
//         label :"Abcd",
//         description:"XYZ",
//       },
//       {
//         label :"Abcd",
//         description:"XYZ",
//       }

//     ],
//   },
  
// ];