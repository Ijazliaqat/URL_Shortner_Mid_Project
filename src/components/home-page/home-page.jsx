import { Button, Grid, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { Form } from 'react-router-dom/dist';
import './home-page.css'

const Homepage = () => {



// URL validation
  const [inputURL, setInputURL] = useState();

  const setValue = (event) => {
    setInputURL(event.target.value);
    console.log(inputURL);
  }

  const isValidUrl = urlString =>{
    var inputElement = document.createElement('input');
    inputElement.type = 'url';
    inputElement.value = urlString;

    if (!inputElement.checkValidity()) {
      return false;
    } else {
      return true;
    }
  }


  const validate = () => {
    if (inputURL === "") {
      return setInputURL("You didnt type a URL !!");
    } else if (!isValidUrl(inputURL)) {
      return setInputURL("Not a URL"); 
    } else {
      console.log("a valid URL");
    }
    
  }





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
              value={inputURL}
                onChange={setValue}
                className='text-container'
                placeholder='Enter Your URL'
              />
              <Button sx={{ marginLeft: 1 }} variant="contained" color="primary" onClick={validate}>
                Generate</Button>
            </Grid>

          </Grid>
          </div>
      </div>
      
    </>
  )
}

export default Homepage;