import { AppBar, Toolbar,Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
          <br /><br /><br /><br />
      
        <AppBar>
        
            <Toolbar>
            <Button variant="contained" color="success"> <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>
            HOME
            </Link>
 
</Button>&nbsp;&nbsp;&nbsp;&nbsp;
<Button variant='contained'  color="success">
          <Link to={'/add'} style={{textDecoration:'none', color:'white'}}>
            ADD
            </Link>
            </Button>
            </Toolbar>
        </AppBar>
        
    </div>
  )
}

export default Navbar