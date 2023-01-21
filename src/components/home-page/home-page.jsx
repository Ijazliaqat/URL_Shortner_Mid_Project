import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Grid, TextField } from '@mui/material';
import { Field, Formik, Form } from 'formik';
import { useState } from 'react';
import useHome from './use-home';
import History from '../app-table/app-table';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './home-page.css';
import { useDispatch, useSelector } from 'react-redux';
import { shortenUrl } from '../../store/url-shortner/url-shortner';
import dayjs from 'dayjs';

const Homepage = () => {

  const { } = useHome();

  const storeUrlData = useSelector(state=>state.shortner.shortUrl)
  console.log(storeUrlData, '👍');

  const dispatch = useDispatch();

  const [url, setUrl] = useState();
  const [data, setData] = useState([]);
  const [expireDate, setExpireDate] = useState(null);

  

  console.log(url);

  const initialValue = {
    urlInput: ''
  }

  const urlSchema = Yup.object().shape({
    urlInput: Yup.string().required('Please Enter Your')
  });

  const formSubmitHandler = (values) => {
    // console.log(values);
    
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


    const short = urlShortener(values.urlInput);
    const original = urlRedirector(short);

    const urls = {short, original }

    setData(current => [...current, urls]);
   
  }

  useEffect(() => {
    dispatch(shortenUrl(data))
  }, [data])
  

  return (
    <>
      <div className='container' >
        <div className='box'>
          <h1 >Paste the URL to be shortened</h1>
          <Grid >
            <Grid>
              <Formik
                initialValues={initialValue}
                validationSchema={urlSchema}
                onSubmit={formSubmitHandler}
              >
                {({ errors, touched, values }) => (
                  <Form>
                    <Grid>
                      <Field name='urlInput' className='text-container' />
                      <div >
                        {errors.urlInput ? (<span className='error-color'>{errors.urlInput}</span>) : null}
                      </div>
                    </Grid>
                    <Grid>

                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          InputProps={{className: 'expiry-field'}}
                          label="Set Expiry"
                          value={expireDate}
                          onChange={(newValue) => {
                            setExpireDate(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <button className='button' type="submit">GENERATE</button>
                  </Form>
                )}

              </Formik>
            </Grid>

            <History urlsData={storeUrlData} />

          </Grid>
        </div>
      </div>

    </>
  )
}

export default Homepage;