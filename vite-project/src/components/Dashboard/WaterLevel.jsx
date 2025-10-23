import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const waterLevelData = [
  { tank: 'A区水槽 / Tank A', level: 75 },
  { tank: 'B区水槽 / Tank B', level: 68 },
  { tank: 'C区水槽 / Tank C', level: 82 },
  { tank: 'D区水槽 / Tank D', level: 70 },
  { tank: 'E区水槽 / Tank E', level: 60 },
];

function WaterLevelChart() {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50'>
      
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <div>
          <h3 className='text-xl font-bold text-slate-800 dark:text-white'>
            水位对比 / Water Level
          </h3>
          <p className='text-sm text-slate-500 dark:text-slate-400'>
            各水槽/区域水位百分比 / Water level (%) by Tank/Area
          </p>
        </div>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center space-x-2'>
            <div className='w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full'></div>
            <div className='text-sm text-slate-600 dark:text-slate-400'>
              Water Level
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className='h-80'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={waterLevelData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke='#e3e8f0' opacity={0.3} />
            <XAxis 
              dataKey="tank" 
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
              formatter={(value) => [`${value}%`, 'Water Level']}
            />
            <Bar 
              dataKey="level" 
              fill='url(#waterGradient)' 
              radius={[4,4,0,0]} 
              maxBarSize={40} 
            />
            <defs>
              <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor='#3b82f6' />
                <stop offset="100%" stopColor='#06b6d4' />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default WaterLevelChart;
