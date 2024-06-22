import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import './ResumeStepper.css';

export const ResumeStepper = ({ steps }) => {
  return (
    <Stepper className='dp-resume-stepper__root' orientation="vertical" nonLinear activeStep={-1}>
      {steps.map((step) => (
        <Step key={step.label} expanded>
          <StepLabel className='dp-resume-stepper-root__label'>{step.label}</StepLabel>
          <StepContent>
            {Array.isArray(step.description) &&
                <>
                <Stepper orientation="vertical" nonLinear activeStep={-1}>
                {step.description.map((desc, idx) => (
                  <Step key={idx} expanded>
                    <StepLabel className='dp-resume-stepper-node__label'>{desc.label}</StepLabel>
                    <StepContent className='dp-resume-stepper__description'>{desc.description}</StepContent>
                  </Step>
                ))}
              <Step></Step>
              </Stepper>
              </>
            }
          </StepContent>
        </Step>
      ))}
      <Step></Step>
    </Stepper>
  );
};
