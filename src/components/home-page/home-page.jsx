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
      <Grid mt={30} className='home-container'>
        <Grid>
          
          <form onSubmit={formSubmitHandler}>

            <TextField
              value={url}
              onChange={(e) => { setUrl(e.target.value) }}
              className='text-container'
              placeholder='Enter Your URL'
            />
        
            <button type='submit' sx={{ marginLeft: 3 }} variant="contained" color="success">
              Generate
            </button>

          </form>
        </Grid>

      </Grid>
      <Grid>
        <Grid className='table-data' mx={60} mt={5}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell align="right">Original URL</TableCell>
                  <TableCell align="right">Short URL</TableCell>
                  <TableCell align="right">Copy</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {urlData.map((data, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right">{index + 1}</TableCell>
                    <TableCell align="right">{data.originalURL}</TableCell>
                    <TableCell align="right">{data.shortURL}</TableCell>
                    <TableCell align="right">{data.btn}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  )
}

export default Homepage;