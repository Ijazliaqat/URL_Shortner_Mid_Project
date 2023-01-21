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