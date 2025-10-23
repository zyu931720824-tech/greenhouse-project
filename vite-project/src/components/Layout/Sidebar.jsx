import {
  Thermometer,
  FileText,
  LayoutDashboard,
  Settings,
  CircleAlert ,
  Zap,
  ChevronDown,
  ChartLine,
} from "lucide-react";
import React, { useState } from "react";
import  Logo  from '../../assets/logo1.png';

const menuItems = [
  {
    id: "sensor-dashboard",
    icon: LayoutDashboard,
    label: "传感器总览",
    active: true,
    badge: "5个在线",
  },
  {
    id: "environmental-sensors",
    icon: Thermometer,
    label: "环境传感器",
    submenu: [
      { id: "temp-humidity", label: "温湿度传感器" },
      { id: "soil-moisture", label: "土壤湿度传感器" },
      { id: "water-level", label: "水位传感器" },
      { id: "light-sensor", label: "光照传感器" },
      { id: "co2-sensor", label: "二氧化碳传感器" },
    ],
  },
  {
    id: "sensor-data",
    icon: ChartLine,
    label: "传感器数据",
    submenu: [
      { id: "real-time", label: "实时数据" },
      { id: "history", label: "历史记录" },
      { id: "trends", label: "数据趋势" },
    ],
  },
  {
    id: "alerts",
    icon: CircleAlert ,
    label: "传感器警报",
    badge: "3条未读",
  },
  {
    id: "sensor-settings",
    icon: Settings,
    label: "传感器设置",
    submenu: [
      { id: "calibration", label: "传感器校准" },
      { id: "thresholds", label: "警报阈值" },
      { id: "connection", label: "连接状态" },
    ]
  },
  {
    id: "reports",
    icon: FileText,
    label: "传感器报表",
  }
  
];

function Sidebar({ collapsed, onToggle, currentPage, onPageChange }) {
  const [expandedItems, setExpenedItems] = useState(new Set(["analytics"]));

  const toggleExpanded = (itemid)=>{
    const newExpanded = new Set(expandedItems);

    if(newExpanded.has(itemid)){
      newExpanded.delete(itemid)
    }else{
      newExpanded.add(itemid)
    }

    setExpenedItems(newExpanded);
  }
  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-72"
      } transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            
          </div> */}
          <img src={Logo} alt="Logo" className="w-10 h-10" />

          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                智水云棚
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                用户界面
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                currentPage === item.id || item.active
                  ? "bg-gradient-to-r from-blue-500 to-green-300 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
              }`} onClick={()=>{
                if(item.submenu){
                  toggleExpanded(item.id);
                }else{
                  onPageChange(item.id);
                }
              }}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5" />
                {!collapsed && (
                  <>
                    <span className="font-medium ml-2">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {item.count && (
                      <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                        {item.count}
                      </span>
                    )}
                  </>
                )}
              </div>

              {!collapsed && item.submenu && (
                <ChevronDown className="w-4 h-4 transition-transform" />
              )}
            </button>

            {/* Sub Menus */}
            {!collapsed && item.submenu && expandedItems.has(item.id) && (
              <div className="ml-8 mt-2 space-y-1">
                {item.submenu.map((subitem) => (
                  <button
                    key={subitem.id}
                    className=" w-full text-left p-2 text-sm text-slate-600
                    dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200
                    hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all"
                  >
                    {subitem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      {!collapsed && <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8gX82JUNfOeUBEz9x-aUxO0kTHEKaHprMQ&s"
            alt="user"
            className="w-10 h-10 rounded-full ring-2 ring-blue-500"
          />
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                Alex Johnson
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                Administrator
              </p>
            </div>
          )}
        </div>
      </div>}
    </div>
  );
}

export default Sidebar;
