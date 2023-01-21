import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React from 'react'
import './history.css'



const History = (props) => {

  console.log(props);

  const {urlsData} = props;
  

  return (
    <div>
      <Grid>
        <Grid className='table-data' mx={60} mt={5}>
          <TableContainer  component={Paper}>
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
                {urlsData?.map((data, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right">{index + 1}</TableCell>
                    <TableCell align="right">{data.original}</TableCell>
                    <TableCell align="right" ><a target='_blank' href={data.original}>{data.short}</a></TableCell>
                    {/* <TableCell align="right">{data.btn}</TableCell> */}
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