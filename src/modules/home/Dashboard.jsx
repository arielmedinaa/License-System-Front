import React, { useState } from 'react';
import {
  DotsVerticalIcon,
  ClockIcon,
  PlusIcon
} from '@heroicons/react/solid';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import Layout from '../../layout/Layout';
import ModalNewCli from '../../core/components/modals/ModalNewCli';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const licenseData = {
    value: '234',
    percentage: '+12%',
    period: 'Since last week'
  };

  const monthlyData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 59 },
    { month: 'Mar', value: 80 },
    { month: 'Apr', value: 81 },
    { month: 'May', value: 56 },
    { month: 'Jun', value: 55 },
    { month: 'Jul', value: 40 }
  ];

  const planDistribution = [
    { name: 'Premium', value: 120, color: '#4f46e5' },
    { name: 'Standard', value: 80, color: '#0ea5e9' },
    { name: 'Basic', value: 40, color: '#94a3b8' }
  ];

  const statusDistribution = {
    percentage: '+13%',
    period: 'Since last month',
    metrics: [
      { name: 'Activas', value: 175 },
      { name: 'Pendientes', value: 34 },
      { name: 'Expiradas', value: 25 },
      { name: 'Total', value: 234 }
    ]
  };

  const recentUsers = [
    { id: '8741', name: 'Carlos Méndez', avatar: 'CM', email: 'carlos@ejemplo.com', plan: 'Premium', status: 'Activa', date: '12/02/2025' },
    { id: '8740', name: 'Laura García', avatar: 'LG', email: 'laura@ejemplo.com', plan: 'Basic', status: 'Pendiente', date: '11/02/2025' },
    { id: '8739', name: 'Miguel Torres', avatar: 'MT', email: 'miguel@ejemplo.com', plan: 'Standard', status: 'Activa', date: '10/02/2025' },
    { id: '8738', name: 'Ana Martínez', avatar: 'AM', email: 'ana@ejemplo.com', plan: 'Premium', status: 'Expirada', date: '15/01/2025' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Activa': return 'bg-green-900 bg-opacity-20 text-green-400';
      case 'Pendiente': return 'bg-yellow-900 bg-opacity-20 text-yellow-400';
      case 'Expirada': return 'bg-red-900 bg-opacity-20 text-red-400';
      default: return 'bg-gray-900 bg-opacity-20 text-gray-400';
    }
  };

  const handleCreateLicense = () => {
    setShowModal(true);
  };

  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-indigo-100 bg-opacity-20 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-lg">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <span className="ml-3 text-lg font-medium text-white">Total Licencias</span>
              </div>
              <button className="text-gray-400 hover:text-white">
                <DotsVerticalIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-8">
              <div className="text-xs text-gray-400 mb-1">{licenseData.percentage} {licenseData.period}</div>
              <div className="text-3xl font-bold text-white">{licenseData.value}</div>
            </div>
            <div className="flex justify-center mt-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2671/2671890.png"
                alt="License Icon"
                className="w-24 h-24 opacity-50"
              />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-medium text-white">Licencias Mensuales</h2>
                <div className="mt-1 flex text-xs text-gray-400">
                  <span className="mr-4">Creadas</span>
                  <span>Expiradas</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-white">
                <span>2025</span>
                <span className="ml-1 p-1 rounded-full bg-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="h-40 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: 'none',
                      borderRadius: '4px',
                      color: '#fff'
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="#94a3b8"
                    radius={[4, 4, 0, 0]}
                    barSize={20}
                  >
                    {
                      monthlyData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.month === 'Mar' ? '#f97316' : '#94a3b8'}
                        />
                      ))
                    }
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-medium text-white">Distribución de Planes</h2>
                <div className="text-xs text-gray-400">Último periodo</div>
              </div>
              <button className="text-gray-400 hover:text-white">
                <DotsVerticalIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="h-40 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={planDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {planDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: 'none',
                      borderRadius: '4px',
                      color: '#fff'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-medium text-white">Usuarios Recientes</h2>
                <div className="text-xs text-gray-400">Últimas licencias creadas</div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handleCreateLicense}
                  className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Nueva Licencia
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-medium text-gray-400 border-b border-gray-700">
                    <th className="pb-3 pr-8">Usuario</th>
                    <th className="pb-3 pr-8">ID</th>
                    <th className="pb-3 pr-8">Email</th>
                    <th className="pb-3 pr-8">Plan</th>
                    <th className="pb-3 pr-8">Status</th>
                    <th className="pb-3">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user, index) => (
                    <tr key={index} className="border-b border-gray-700 last:border-0">
                      <td className="py-4 pr-8">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white text-xs font-medium">
                            {user.avatar}
                          </div>
                          <span className="ml-3 text-white">{user.name}</span>
                        </div>
                      </td>
                      <td className="py-4 pr-8 text-gray-400">#{user.id}</td>
                      <td className="py-4 pr-8 text-gray-400">{user.email}</td>
                      <td className="py-4 pr-8 text-white">{user.plan}</td>
                      <td className="py-4 pr-8">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 text-gray-400">{user.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-white">Estado de Licencias</h2>
              <button className="text-gray-400 hover:text-white">
                <DotsVerticalIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="flex justify-center my-6">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#4b5563"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#activity-gradient)"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="125.6"
                    transform="rotate(-90 50 50)"
                  />
                  <defs>
                    <linearGradient id="activity-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#c4b5fd" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold text-white">{statusDistribution.percentage}</div>
                  <div className="text-xs text-gray-400">{statusDistribution.period}</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {statusDistribution.metrics.map((metric, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-green-400' :
                    index === 1 ? 'bg-yellow-400' :
                      index === 2 ? 'bg-red-400' : 'bg-indigo-400'
                    }`} />
                  <div className="ml-2">
                    <div className="text-xs text-gray-400">{metric.name}</div>
                    <div className="text-sm font-medium text-white">{metric.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
      {showModal && (
        <ModalNewCli setShowModal={setShowModal} />
      )}
    </>

  );
};

export default Dashboard;