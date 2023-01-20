import { Button, Grid, TextField } from '@mui/material';
import React from 'react'
import './home-page.css'

const Homepage = () => {

  return (
    <>
    <div className='container'>
      <div className='box'>
        <h1 >Paste the URL to be shortened</h1>
          <Grid >
            <Grid>
              <TextField
                className='text-container'
                placeholder='Enter Your URL'
              />
              <Button sx={{ marginLeft: 1 }} variant="contained" color="primary">
                Generate</Button>
            </Grid>

          </Grid>
          </div>
      </div>
      
    </>
  )
}

export default Homepage;