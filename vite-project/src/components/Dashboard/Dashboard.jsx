import React from 'react'
import ChartSection from './ChartSection'
import ChartSection1 from './ChartSection1'
import RevenueChart from './SoilMoistureChart'
import WaterLevelChart from './WaterLevel'
import DeviceStatsGrid from './Devices'

function Dashboard() {
  return (
    <div className='space-y-6'>
      {/*charts sction*/}
        <DeviceStatsGrid />
        <ChartSection />
        <ChartSection1 />    
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2'>
          <WaterLevelChart />
        </div>
      </div> 
    </div>
  )
}

export default Dashboard
