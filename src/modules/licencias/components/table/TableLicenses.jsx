import React from 'react'

const TableLicenses = ({paginatedLicenses, getStatusColor}) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="text-left text-xs font-medium text-gray-400 border-b border-gray-700">
                        <th className="px-6 py-3">ID</th>
                        <th className="px-6 py-3">Usuario</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Plan</th>
                        <th className="px-6 py-3">Estado</th>
                        <th className="px-6 py-3">Fecha</th>
                        <th className="px-6 py-3">Expiración</th>
                        <th className="px-6 py-3">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedLicenses.map((license) => (
                        <tr key={license.id} className="border-b border-gray-700 last:border-0 hover:bg-gray-700">
                            <td className="px-6 py-4 text-sm font-medium text-white whitespace-nowrap">#{license.id}</td>
                            <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">{license.user}</td>
                            <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">{license.email}</td>
                            <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">{license.plan}</td>
                            <td className="px-6 py-4 text-sm whitespace-nowrap">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(license.status)}`}>
                                    {license.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">{license.date}</td>
                            <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">{license.expiry}</td>
                            <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                <button className="text-indigo-400 hover:text-indigo-300 mr-3">Editar</button>
                                <button className="text-red-400 hover:text-red-300">Revocar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableLicenses