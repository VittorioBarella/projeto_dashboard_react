import React, { useEffect } from 'react';
import { TextField, InputAdornment, IconButton, Icon } from '@mui/material';
import { FaPlus } from 'react-icons/fa';
import Button from '@mui/material/Button';
import './dashboard-navbar.css';
function DashboardNavbar() {
  return (
    <>
      <div className='navigation'>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <Icon>search</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className='addNewSection'>
        <Button variant='contained' endIcon={<FaPlus />}>
          Add New Section
        </Button>
      </div>
    </>
  );
}

export default DashboardNavbar;
