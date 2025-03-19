import { DotsVerticalIcon } from '@heroicons/react/solid'
import React from 'react'
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

const CardsLicensesHome = ({ licenseData, monthlyData, planDistribution }) => {
    return (
        <>
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
                                    color: 'white'
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
                        <PieChart >
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
                                    color: 'white'
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    )
}

export default CardsLicensesHome