import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React from 'react'
import './history.css'



const History = () => {

    //dummy data
    const urlData = [{
      originalURL: "https://contoursoftware.com",
      shortURL: "Short.ly://abc",
      btn: <Button>Copy</Button>
    }];
  

  return (
    <div>
        <Grid className='table-data' >
          <TableContainer  component={Paper}>
            <Table aria-label="simple table">
              <TableHead >
                <TableRow>
                  <TableCell sx={{fontWeight:"bold"}}>No.</TableCell>
                  <TableCell sx={{fontWeight:"bold"}}>Original URL</TableCell>
                  <TableCell sx={{fontWeight:"bold"}}>Short URL</TableCell>
                  <TableCell sx={{fontWeight:"bold"}}>Copy</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {urlData.map((data, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell >{index + 1}</TableCell>
                    <TableCell >{data.originalURL}</TableCell>
                    <TableCell >{data.shortURL}</TableCell>
                    <TableCell >{data.btn}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
    </div>
  )
}
export default History;