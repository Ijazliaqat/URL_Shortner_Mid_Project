import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {useCopyToClipboard} from "usehooks-ts";




const Homepage = () => {
  const [value,copy]=useCopyToClipboard()
  const [date, setDate] = React.useState(null);
  return (
  <>

  {/* URL Input Generate Box */}
    <div className='container'>
      <h1>Paste your <span> URL </span> here </h1>
        <div className='inputBox'>
          &nbsp; &nbsp; <input type="text" placeholder='Paste your link here' />
        <Button  variant="contained" color="success">Shorten</Button>
    </div>

  {/* URL Output Copy Box */}
    <h1>Copy your <span> URL </span> from here </h1>
    <div className='inputBox'>
      &nbsp; &nbsp; <input type="text" placeholder='Paste your link here' />
      <Button  onClick={()=> {copy('text')}} variant="contained" color="error">Copy</Button>
    </div>

  {/* Set Expiry Code Block */}
    <h1>Set expiry for your <span> URL </span> from here </h1>
    <div className='inputBox'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label="" value={value}onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  </div>
  {/* Background Animation #Ignore */}
      <div>
      <div className="background">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    
  </div>
  </>
      


//     {/* <TextField
//   id="outlined-name"
//   full
//   label="Name"
//   //value={name}
//   //onChange={handleChange}
// /> */}


  )
}

export default Homepage;