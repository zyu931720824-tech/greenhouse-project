
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

function SoilMoistureChart() {
  const soilMoistureData = [
    { sensor: 'A区传感器1 / Sensor A1', moisture: 62 },
    { sensor: 'A区传感器2 / Sensor A2', moisture: 59 },
    { sensor: 'B区传感器1 / Sensor B1', moisture: 67 },
    { sensor: 'B区传感器2 / Sensor B2', moisture: 64 },
    { sensor: 'C区传感器1 / Sensor C1', moisture: 71 },
    { sensor: 'C区传感器2 / Sensor C2', moisture: 68 },
  ];

  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6'>
      
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <div>
          <h3 className='text-xl font-bold text-slate-800 dark:text-white'>土壤湿度 / Soil Moisture</h3>
          <p className='text-sm text-slate-500 dark:text-slate-400'>
            各区域土壤湿度百分比 / Soil Moisture (%) by Sensor
          </p>
        </div>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center space-x-2'>
            <div className='w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full'></div>
            <div className='text-sm text-slate-600 dark:text-slate-400'>
              湿度
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className='h-80'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={soilMoistureData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke='#e3e8f0' opacity={0.3} />
            <XAxis
              dataKey="sensor"
              stroke='#64748b'
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke='#64748b'
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor:"rgba(255,255,255,0.95)",
                border:"none",
                borderRadius:"12px",
                boxShadow:"0 10px 40px rgba(0,0,0,0.1)",
              }}
              formatter={(value) => [`${value}%`, 'Moisture']}
            />
            <Bar 
              dataKey="moisture"
              fill='url(#moistureGradient)'
              radius={[4,4,0,0]}
              maxBarSize={40}
            />
            <defs>
              <linearGradient id="moistureGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor='#78efaa' />
                <stop offset="100%" stopColor='#2c81ff' />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default SoilMoistureChart;
