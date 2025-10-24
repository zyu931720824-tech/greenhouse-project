import React from 'react';
import { ArrowUpRight, ArrowDownRight, Server } from 'lucide-react';

const devices = [
  {
    name: "温湿度传感器",
    count: 3,
  },
  {
    name: "CO₂ 传感器",
    count: 5,
  },
  {
    name: "光照传感器",
    count: 2,
  },
  {
    name: "水位传感器",
    count: 1,
  },
];

const totalDevices = devices.reduce((sum, d) => sum + d.count, 0);

function DeviceStatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {devices.map((device, index) => {
        

        const percent = ((device.count / totalDevices) * 100).toFixed(1);

        return (
          <div
            key={index}
            className="bg-white/88 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  {device.name}
                </p>
                <p className="text-3xl text-slate-800 dark:text-white mb-2">
                  {device.count}
                </p>
                
                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`bg-gradient-to-r from-blue-500 to-green-400 h-full transition-all`}
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  占总设备 {percent}%
                </p>
              </div>
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 group-hover:scale-110 transition-all duration-300">
                <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeviceStatsGrid;
