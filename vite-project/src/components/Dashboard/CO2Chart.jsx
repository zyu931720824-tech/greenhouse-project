
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// 数据部分仍然用普通 co2（变量名不能带下标）
const co2Data = [
  { time: '08:00', co2: 400 },
  { time: '09:00', co2: 420 },
  { time: '10:00', co2: 450 },
  { time: '11:00', co2: 470 },
  { time: '12:00', co2: 500 },
  { time: '13:00', co2: 520 },
  { time: '14:00', co2: 510 },
  { time: '15:00', co2: 495 },
  { time: '16:00', co2: 480 },
];

function CO2Chart() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
            CO₂浓度 / CO₂ Concentration
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            空气中二氧化碳浓度变化 / CO₂ concentration in air (ppm)
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={co2Data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e3e8f0" opacity={0.3} />
            <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} unit=" ppm" />
            <Tooltip 
              contentStyle={{
                backgroundColor:"rgba(255,255,255,0.95)",
                border:"none",
                borderRadius:"12px",
                boxShadow:"0 10px 40px rgba(0,0,0,0.1)",
              }}
              formatter={(value) => [`${value} ppm`, 'CO₂']}
            />
            <Legend formatter={() => "CO₂"} />
            <Line 
              type="monotone" 
              dataKey="co2" 
              stroke="#f97316" 
              strokeWidth={3} 
              activeDot={{ r: 6 }}
              dot={{ r: 3 }}
              name="CO₂"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CO2Chart;

