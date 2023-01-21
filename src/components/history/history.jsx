import React from 'react'
import { useSelector } from 'react-redux'
import AppTable from '../app-table/app-table'

const History = () => {
    const storeUrlData = useSelector(state=>state.shortner.shortUrl)
  return (
    <div>
        <AppTable urlsData={storeUrlData} />
        <Grid className='table-data' >
          <TableContainer  component={Paper}>
            <Table aria-label="simple table">
              <TableHead >
                <TableRow>
                  <TableCell sx={{fontWeight:"bold"}}>No.</TableCell>
                  <TableCell sx={{fontWeight:"bold"}}>Original URL</TableCell>
                  <TableCell sx={{fontWeight:"bold"}}>Short URL</TableCell>
                  <TableCell sx={{fontWeight:"bold"}}>Expiry Date</TableCell>
                  <TableCell sx={{fontWeight:"bold"}}>Copy</TableCell>

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
                    <TableCell align="right">{data.expiry}</TableCell>
                    <TableCell align="right"><button onClick={ () => {
                        navigator.clipboard.writeText(data.short);
                        return alert("URL Copied");}}>Copy</button></TableCell> 
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
    </div>
  )
}

export default History