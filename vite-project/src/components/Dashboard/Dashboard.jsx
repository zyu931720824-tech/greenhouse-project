import React from 'react'
import ChartSection from './ChartSection'
import ChartSection1 from './ChartSection1'
import RevenueChart from './RevenueChart'
import TemperatureHumidity from './TemperatureHumidity'
import CO2Chart from './CO2Chart'
import WaterLevelChart from './WaterLevel'

function Dashboard() {
  return (
    <div className='space-y-6'>
      {/*charts sction*/}
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
