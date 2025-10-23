import React from 'react'
import ChartSection from './ChartSection'
import TableSection from './TableSection'

function Dashboard() {
  return (
    <div className='space-y-6'>
      {/*charts sction*/}
        <ChartSection />
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2'>
          <TableSection />
        </div>
      </div> 
    </div>
  )
}

export default Dashboard
