
// import React from 'react'
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

// const data = [
//   { name: "Electronics", value: 45, color: "#3b82f6" },
//   { name: "Clothing", value: 35, color: "#8b5cf6" },
//   { name: "Books", value: 15, color: "#10b981" },
//   { name: "Other", value: 10, color: "#f59e0b" },
// ];
// const lightIntensityData = [
//   { name: '低光 / Low (0-200 Lux)', value: 20, color: '#fde68a' },    // 20%
//   { name: '中光 / Medium (200-500 Lux)', value: 50, color: '#facc15' }, // 50%
//   { name: '高光 / High (500-800 Lux)', value: 20, color: '#f59e0b' },   // 20%
//   { name: '强光 / Very High (800+ Lux)', value: 10, color: '#b45309' }, // 10%
// ];

// function SalesChart() {
//   return (
//     <div className="bg-white dark:bg-slate-900 backdrop-blur-xl rounded-b-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
//       <div className="mb-6">
//         <h3 className="text-lg font-bold text-slate-800 dark:text-white">
//           Sales by Category
//         </h3>
//         <p className="text-sm text-slate-500 dark:text-slate-400">
//           Product Distribution
//         </p>
//       </div>

//       <div className="h-48">
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie
//               data={data}
//               cx="50%"
//               cy="50%"
//               innerRadius={40}
//               outerRadius={80}
//               paddingAngle={5}
//               dataKey="value"
//             >
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={entry.color} />
//               ))}
//             </Pie>
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "rgba(255,255,255,0.95)",
//                 border: "none",
//                 borderRadius: "12px",
//                 boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
//               }}
//             />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       <div className='space-y-3'>
//         {data.map((item,index)=>{
//           return<div className='flex items-center justify-between' key={index}>
//             <div className='flex items-center space-x-3'>
//               <div className='w-3 h-3 rounded-full' style={{backgroundColor:item.color}}> </div>
//               <span className='text-sm text-slate-600 dark:text-slate-400'>{item.name}</span>
//             </div>
//             <div className='text-sm font-semibold text-slate-800 dark:text-white'>{item.value}%</div>
//           </div>
//         })}
//       </div>
//     </div>
//   )
// }

// export default SalesChart
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const lightIntensityData = [
  { name: '低光 / Low (0-200 Lux)', value: 20, color: '#fde68a' },
  { name: '中光 / Medium (200-500 Lux)', value: 50, color: '#facc15' },
  { name: '高光 / High (500-800 Lux)', value: 20, color: '#f59e0b' },
  { name: '强光 / Very High (800+ Lux)', value: 10, color: '#b45309' },
];

function LightIntensityChart() {
  return (
    <div className="bg-white dark:bg-slate-900 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          光照强度 / Light Intensity
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          当前光照强度分布
        </p>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={lightIntensityData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={(entry) => `${entry.value}%`}
            >
              {lightIntensityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255,255,255,0.95)",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className='space-y-3 mt-4'>
        {lightIntensityData.map((item, index) => (
          <div className='flex items-center justify-between' key={index}>
            <div className='flex items-center space-x-3'>
              <div className='w-3 h-3 rounded-full' style={{ backgroundColor: item.color }}> </div>
              <span className='text-sm text-slate-600 dark:text-slate-400'>{item.name}</span>
            </div>
            <div className='text-sm font-semibold text-slate-800 dark:text-white'>{item.value}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LightIntensityChart
