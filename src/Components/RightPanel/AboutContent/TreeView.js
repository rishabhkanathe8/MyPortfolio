import * as React from 'react';
import Box from '@mui/material/Box';
import './AboutContainer.css';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';


const MUI_X_PRODUCTS = [
  {
    id: 'KnowMe',
    label: 'Know More About Me',
    children: [
      { id: 'Know Me', label: 'I am Rishabh Kanathe, a postgraduate in Advanced Computing from CDAC ACTS Pune, and an engineering graduate from RGPV Bhopal. I currently work as a full-stack software developer. I am passionate about building innovative software solutions and continuously learning new technologies.' },
    ],
  },
  {
    id: 'Email',
    label: 'Email',
    children: [
      { id: 'email', label: 'RishabhKanathe8@gmail.com' },
    ],
  },
  {
    id: 'Mobile',
    label: 'Mobile No',
    children: [{ id: 'mobile', label: '9575037130' }],
  },
  {
    id: 'C',
    label: 'City ',
    children: [{ id: 'City', label: 'Betul MP' }],
  },
  
];

 const TreeView=()=> {
  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <RichTreeView  items={MUI_X_PRODUCTS} />
    </Box>
  );
}

export default TreeView;
