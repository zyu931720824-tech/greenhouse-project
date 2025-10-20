import{
  BarChart3,
  Calendar,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
  Zap,
  ChevronDown,
} from "lucide-react";
import React from 'react';

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",

  },
  {
    id: "analitics",
    icon: BarChart3,
    label: "Analitics",
    submenu:[
      {id:"overview",lable:"Overview"},
      {id:"reports",lable:"Reports"},
      {id:"insights",lable:"Insights"},
    ]

  },
  {
    id: "user",
    icon: Users,
    label: "Users",
    count:"2.4k",
    submenu:[
      {id:"all-users",lable:"All Users"},
      {id:"roles",lable:"Roles & Permissions"},
      {id:"activity",lable:"User Activity"},
    ]

  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-commerce",
    submenu:[
      {id:"products",lable:"Products"},
      {id:"orders",lable:"Orders"},
      {id:"customers",lable:"Customers"},
    ]

  },
  {
    id:"inventory",
    icon:Package,
    label:"Inventory",
    count:"847",
  },
  {
    id:"transactions",
    icon:CreditCard,
    label:"Transactions",
  },
  {
    id:"messages",
    icon:MessageSquare,
    label:"Messages",
    badge:"12",
  },
  {
    id:"calendar",
    icon:Calendar,
    label:"Calendar",
  },
  {
    id:"reports",
    icon:FileText,
    label:"Reports",
  },
  {
    id:"settings",
    icon:Settings,
    label:"Settings",
  },
]

function Sidebar() {
  return (
    <div className='w-72 transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80
    backrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col *
    relative z-10'>
      {/* {Logo} */}
      <div className='p-6 border-b bordr-slate-200/50 dark:border-slate-700/50 border-b-blue-200'>
        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl
          flex items-center justify-center shadow-lg'>
            <Zap className='w-6 h-6 text-white'/>

          </div>
          {/*Conditional Rendering*/}
          <div>
            <h1 className='text-xl font-bold text-slate-800 dark:text-white'>
              Nexus
            </h1>
            <p className='text-xs text-slate-500 dark:text-slate-400'>Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation I will dispaly Doynamic Menus*/}
      <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>
        {menuItems.map((item)=>{
          return(
            <div key={item.id}>
            <button className={`w-full flex items-center justify-between p-3 rounded-xl
              transition-all duration-200`}
              >
                <div className='flex items-center space-x-3'>
                  <item.icon className={`w-5 h-5`}/>
                  {/* Conditional Rendering  */}
                  <>
                    <span className='font-medium ml-2'>{item.label}</span>
                    {item.badge &&(
                      <span className='px-2 py-1 text-xs bg-red-500 text-white- rounded-full'>
                      {item.badge}
                    </span>
                    
                    )}
                    {item.count && <span className="px2 py-1 text-xs bg-slate-200
                    dark:ba-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                      {item.count}
                      </span>}
                  </>
                </div>

                {item.submenu && <ChevronDown className='w-4 h-4 transition-transform'/>}
              </button>

              {/* Sub Menus*/}
              <div className="ml-8 mt-2 space-y-1">
                {/* {item.submenu.map((subitem)=>{
                  return <button>{subitem.lable}</button>
                })} */}

              </div>


          </div>
          )
            
          
        })}
          
          
      </nav>
      {/* User Profile */}
      <div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50'>
        <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50
        dark:bg-slate-800/50'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8gX82JUNfOeUBEz9x-aUxO0kTHEKaHprMQ&s" alt="user" className='w-10 h-10 rounded-full ring-2 ring-blue-500' />
          <div className='flex-1 min-w-0'>
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>
                Alex Johnson
              </p>
              <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>
                Administrator
              </p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Sidebar