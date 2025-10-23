import React from 'react'
import SoilMoistureChart from './SoilMoistureChart'
import LuminosityTrend from './LuminosityTrend'

function ChartSection() {
  return (
    <div className='grid grid-col-1 xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2'>
            <SoilMoistureChart />
        </div>
        <div className='space-y-6'>
          <LuminosityTrend />
        </div>
    </div>
  )
}

export default ChartSection