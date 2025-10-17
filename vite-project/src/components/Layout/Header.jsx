import React from 'react'
import { Filter, Menu, Search, Plus, Bell, Sun, Settings, ChevronDown} from 'lucide-react';

function Header() {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b
    border-slate-200/50 dark:border-slate-700/50 px-6 py-4'>
      <div className='flex items-center justify-between'>
        {/*Left Section */}
        <div className='flex items-center space-x-4'>
          <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300
          hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
              <Menu className="w-5 h-5" />
          </button>

          <div className='hidden md:block'>
            <h1 className='text-2xl font-black tesx-slate-800 dark:text-white'>
              Dashboard
            </h1>
            <p>Welcome back, Alex! here's what's happening today</p>
          </div>
        </div>

        {/* Center */}
        <div className='flex-1 max-w-md mx-8'>
          <div className='relative'>
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2
            text-slate-400"/>
            <input type="text" 
            placeholder='Search Anything' 
            className='w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200
             dark:border-slate-700 rounded-xl text-slate-800 
             dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2
             focus:ring-blue-500 focus:border-transparent transition-all'
            />
            <button className='absolute right-2 top-1/2 trans  -translate-y-1/2 p-1.5
            text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'>
              <Filter/>
            </button>
          </div>
        </div>
        {/* Right */}
        <div className='flex items-center space-x-3'>
          {/* Quick Action */}
          <button className='hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r
          from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-a'>
              <Plus className='w-4 h-4'/>
              <span className='text-sm font-medium'>New</span>
          </button>
          {/* Toggle */}
          <button className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300
          hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <Sun className='w-5 h-5'></Sun>
          </button>

          {/* Notification */}
          <button className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300
          hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
              <Bell className='w-5 h-5'/>
              <span className='absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs
              rounded-full flex items-center justify-center'>
                3
              </span>
          </button>

          {/* Setting */}
          <button className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300
          hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <Settings className='w-5 h-5'/>
          </button>

          {/* user profile */}
          <div className='flex items-center space-x-3 pl-3 border-l border-slate-200
          dark:border-slate-700'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8gX82JUNfOeUBEz9x-aUxO0kTHEKaHprMQ&s" alt="User" 
            className='w-8 h-8 rounded-full ring-2 ring-blue-500'/>
            <div className='hidden md:block'>
              <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>
                Alex JohnSon
              </p>
            </div>
            <ChevronDown className='w-4 h4 text-slate-400'></ChevronDown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header