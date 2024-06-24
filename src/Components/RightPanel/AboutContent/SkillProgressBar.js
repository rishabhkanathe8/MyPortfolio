import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Component to display progress with a label
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="buffer" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const SkillsProgress =()=> {
  // Define your skills and proficiency levels
  const skills = [
    { name: 'Java', level: 70 },
    { name: 'React', level: 65 },
    { name: 'Spring Boot J2EE', level: 75 },
    { name: 'Data Structure', level: 65 },
    { name: 'Java Script', level: 55 },
    { name: 'Data Base', level: 65 },
    { name: 'Ms .Net', level: 55 },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: 400, margin: '0 auto', padding: 2 }}>
      {skills.map((skill, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom>{skill.name}</Typography>
          <LinearProgressWithLabel valueBuffer={skill.level} value={skill.level} />
        </Box>
      ))}
    </Box>
  );
}
export default SkillsProgress;
