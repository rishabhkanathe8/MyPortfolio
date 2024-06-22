import * as React from 'react';
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
      <div className='dp-resume-wrapper'>
        <div className='dp-resume-left-column'>
        <ResumeStepper className="dp-resume__professional-summery" steps={professionalSummery}/>
        <ResumeStepper className="dp-resume__education" steps={education}/>
        <ResumeStepper className="dp-resume__certificate" steps={certificate}/>
        </div>
        <div className='dp-resume-right-column'>
        <ResumeStepper className="dp-resume__experienec" steps={professionalExperience}/>
        <ResumeStepper className="dp-resume__project" steps={projects}/>
        </div>
      </div>
    </div>
  );
};


