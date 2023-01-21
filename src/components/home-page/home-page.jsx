import { Button, Grid, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { Form } from 'react-router-dom/dist';
import './home-page.css'

const Homepage = () => {

  const [url, setUrl] = useState('');

  const urlData = [
    {
      originalURL: "https://contoursoftware.com",
      shortURL: "Short.ly://abc",
      btn: <Button>Copy</Button>
    }
  ];

  const obj = {};
  console.log(obj);
  const urlShortener = (longURL = '') => {
    let shortURL = "short.ly/" + longURL.replace(/[^a-z]/g, '').slice(-4);
    if (!obj[shortURL]) {
      obj[shortURL] = longURL;
    };
    return shortURL;
  }
  const urlRedirector = (shortURL = '') => {
    return obj[shortURL];
  };



  //dummy data


  const formSubmitHandler = (e) => {
    e.preventDefault();


    const short = urlShortener(url);
    const original = urlRedirector(short);

    console.log(short);
    // console.log(original);
    
  }

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
                InputProps={{className: 'text-field'}}
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