import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { width } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux'
import AppTable from '../app-table/app-table'

const History = () => {
    const storeUrlData = useSelector(state=>state.shortner.shortUrl)
  return (
    <div>
        <AppTable urlsData={storeUrlData} />
    </div>
  )
}

export default History