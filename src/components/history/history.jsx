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
      <Grid>
        <Grid className='table-data' mx={60} mt={5}>
          <TableContainer  component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell >No.</TableCell>
                  <TableCell align="right" >Original URL</TableCell>
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
    </div>
  )
}
export default History;