import {Grid,Paper,Table,TableBody,TableCell,TableContainer, TableHead,TableRow,} from "@mui/material";
import React from "react";
import "./history.css";

const AppTable = (props) => {
  console.log(props);

  const { urlsData } = props;

  return (
    <div>
      <Grid className="table-data">
        <TableContainer component={Paper} sx={{ height: 150, width: 700 }}>
          <Table aria-label="simple table" sx={{ height: "max-content" }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>No.</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Original URL</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Short URL</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Expiry Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {urlsData?.map((data, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{data.original}</TableCell>
                  <TableCell>
                    <a target="_blank" href={data.original}>
                      {data.short}
                    </a>
                  </TableCell>
                  <TableCell>{data.expireDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
};
export default AppTable;
