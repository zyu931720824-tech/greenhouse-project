
import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { time: '08:00', temperature: 25, humidity: 60 },
  { time: '09:00', temperature: 26, humidity: 58 },
  { time: '10:00', temperature: 28, humidity: 55 },
  { time: '11:00', temperature: 30, humidity: 52 },
  { time: '12:00', temperature: 32, humidity: 50 },
  { time: '13:00', temperature: 33, humidity: 48 },
  { time: '14:00', temperature: 31, humidity: 54 },
];

function TemperatureHumidity() {
  return (
    <div className="space-y-6">
      {/* Title Section */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              温度与空气湿度（Temperature & Humidity）
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              实时监测大棚空气状况 / Real-time greenhouse air conditions
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            查看全部 / View All
          </button>
        </div>

        {/* Chart */}
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis
                yAxisId="left"
                label={{
                  value: '温度 (°C)',
                  angle: -90,
                  position: 'insideLeft',
                  offset: -5,
                  style: { textAnchor: 'middle' },
                }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                label={{
                  value: '湿度 (%)',
                  angle: -90,
                  position: 'insideRight',
                  offset: 10,
                  style: { textAnchor: 'middle' },
                }}
              />
              <Tooltip
                formatter={(value, name) => {
                  if (name === 'temperature') return [`${value} °C`, '温度 Temperature'];
                  if (name === 'humidity') return [`${value} %`, '湿度 Humidity'];
                  return value;
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="temperature"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                name="温度 Temperature"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="humidity"
                stroke="#82ca9d"
                name="湿度 Humidity"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default TemperatureHumidity;
