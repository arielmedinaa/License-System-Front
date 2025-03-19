import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import {
  HomeIcon,
  UserGroupIcon,
  KeyIcon,
  CogIcon,
  LogoutIcon,
  SearchIcon,
  BellIcon,
  MoonIcon
} from '@heroicons/react/outline';

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '/dashboard', current: location.pathname === '/dashboard' },
    { name: 'Licencias', icon: KeyIcon, href: '/licenses', current: location.pathname === '/licenses' },
    { name: 'Usuarios', icon: UserGroupIcon, href: '/users', current: location.pathname === '/users' },
    { name: 'Configuración', icon: CogIcon, href: '/settings', current: location.pathname === '/settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="w-64 bg-gray-900 border-r border-gray-800">
        <div className="flex items-center h-16 px-6">
          <div className="flex items-center text-white">
            <svg className="w-8 h-8 text-indigo-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm2 10H10v-2h4v2zm0-4H10V8h4v4z" />
            </svg>
            <span className="ml-2 text-xl font-semibold">LICENCIA</span>
          </div>
        </div>
        <nav className="mt-2 px-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-3 my-1 text-sm font-medium rounded-md transition-colors ${item.current
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 w-64 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-6 py-4 text-sm font-medium text-gray-400 hover:text-white"
          >
            <LogoutIcon className="w-5 h-5 mr-3" />
            Log out
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex items-center justify-between h-16 px-6 bg-gray-900">
          <h1 className="text-2xl font-bold text-white">Home</h1>
          <div className="flex items-center">
            <div className="relative mx-4">
              <SearchIcon className="absolute top-1/2 left-3 w-5 h-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search here..."
                className="w-64 py-2 pl-10 pr-4 bg-gray-800 border border-gray-700 rounded-full text-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <button className="p-2 mx-1 text-gray-400 bg-gray-800 rounded-full hover:text-white">
              <MoonIcon className="w-5 h-5" />
            </button>
            <button className="p-2 mx-1 text-gray-400 bg-gray-800 rounded-full hover:text-white">
              <BellIcon className="w-5 h-5" />
            </button>
            <div className="ml-2">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-gray-700"
              />
            </div>
          </div>
        </div>

        <main className="flex-1 overflow-auto p-6 bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;