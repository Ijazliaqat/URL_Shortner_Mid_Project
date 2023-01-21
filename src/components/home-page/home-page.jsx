import React, { useEffect } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Field, Formik, Form } from 'formik';
import { useState } from 'react';
import useHome from './use-home';
import './home-page.css';
import History from '../history/history';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Homepage = () => {

  const { initialValue, SignupSchema } = useHome();

  const [url, setUrl] = useState();
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);

  console.log(url);

  // useEffect(()=>{
  //   localStorage.setItem('shortURLs', JSON?.stringify(data))
  // },[data]);
  // console.log(data);

  const formSubmitHandler = (values) => {
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


    const short = urlShortener(values.url);
    const original = urlRedirector(short);

    const urls = {
      short,
      original,
    }

    setData(current => [...current, urls]);
  }

  return (
    <>
      <div className='container'>
        <div className='box'>
          <h1 >Paste the URL to be shortened</h1>
          <Grid >
            <Grid>
              <Formik
                initialValues={initialValue}
                validationSchema={SignupSchema}
                onSubmit={formSubmitHandler}
              >
                {() => (
                  <Form>
                    <Field
                      name='url'
                      className='text-container'
                    />
                    <Grid>

                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Basic example"
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <button type="submit">Submit</button>
                  </Form>
                )}

              </Formik>
            </Grid>

            <History urlsData={data} />

          </Grid>
        </div>
      </div>

    </>
  )
}

export default Homepage;