import React from 'react'
import TemperatureHumidity from './TemperatureHumidity'
import CO2Chart from './CO2Chart'

function ChartSection() {
  return (
    <div className='grid grid-col-1 xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2'>
            <TemperatureHumidity />
        </div>
        <div className='space-y-6'>
          <CO2Chart />
        </div>
    </div>
  )
}

export default ChartSection