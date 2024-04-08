import { TextField, Typography,Button } from '@mui/material'
import React from 'react'

const Addblog = () => {
  return (
    <div>
        <br /><br /><br />

        <Typography  variant='h4' style={{color:'purple'}}>ADD BLOG</Typography>
        <br /><br /><br />
        <TextField id="outlined-basic" label="BLOG NAME" variant="outlined" />
        <br /><br /><br /><br />
        <TextField
          id="standard-textarea"
          label="BLOG DISCREPTION"
         multiline
          variant="standard"
        />
                    <br /><br /><br /><br />
                    <TextField id="outlined-basic" label="AUTHOR" variant="outlined" />
        <br /><br /><br />


        <Button variant="contained" color="success">
 SUBMIT
</Button>
    </div>
  )
}

export default Addblog