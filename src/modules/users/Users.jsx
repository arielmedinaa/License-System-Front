import React, { useState } from 'react';
import { SearchIcon, PlusIcon } from '@heroicons/react/solid';
import Layout from '../../layout/Layout';
import ModalNewCli from '../../core/components/modals/ModalNewCli';

const Users = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const usersData = [
        { id: '001', name: 'Carlos Méndez', email: 'carlos@ejemplo.com', role: 'Admin', status: 'Activo', licenses: 3, lastLogin: '12/02/2025' },
        { id: '002', name: 'Laura García', email: 'laura@ejemplo.com', role: 'User', status: 'Activo', licenses: 1, lastLogin: '11/02/2025' },
        { id: '003', name: 'Miguel Torres', email: 'miguel@ejemplo.com', role: 'User', status: 'Inactivo', licenses: 2, lastLogin: '10/02/2025' },
        { id: '004', name: 'Ana Martínez', email: 'ana@ejemplo.com', role: 'Admin', status: 'Activo', licenses: 3, lastLogin: '15/01/2025' },
        { id: '005', name: 'David Rodríguez', email: 'david@ejemplo.com', role: 'User', status: 'Activo', licenses: 1, lastLogin: '05/02/2025' },
        { id: '006', name: 'Sofía López', email: 'sofia@ejemplo.com', role: 'User', status: 'Activo', licenses: 1, lastLogin: '01/02/2025' },
        { id: '007', name: 'Fernando Sánchez', email: 'fernando@ejemplo.com', role: 'Manager', status: 'Activo', licenses: 0, lastLogin: '29/01/2025' },
        { id: '008', name: 'Valentina Romero', email: 'valentina@ejemplo.com', role: 'User', status: 'Inactivo', licenses: 1, lastLogin: '25/01/2025' },
        { id: '009', name: 'Gabriel Moreno', email: 'gabriel@ejemplo.com', role: 'User', status: 'Activo', licenses: 1, lastLogin: '10/01/2025' },
        { id: '010', name: 'Camila Díaz', email: 'camila@ejemplo.com', role: 'Manager', status: 'Activo', licenses: 2, lastLogin: '20/01/2025' },
        { id: '011', name: 'Javier Herrera', email: 'javier@ejemplo.com', role: 'User', status: 'Activo', licenses: 1, lastLogin: '15/01/2025' },
        { id: '012', name: 'Lucía Vargas', email: 'lucia@ejemplo.com', role: 'User', status: 'Inactivo', licenses: 1, lastLogin: '10/01/2025' },
    ];

    const statsData = [
        { title: 'Total Usuarios', value: usersData.length, color: 'bg-indigo-600' },
        { title: 'Usuarios Activos', value: usersData.filter(user => user.status === 'Activo').length, color: 'bg-green-600' },
        { title: 'Administradores', value: usersData.filter(user => user.role === 'Admin').length, color: 'bg-purple-600' },
        { title: 'Licencias Asignadas', value: usersData.reduce((acc, user) => acc + user.licenses, 0), color: 'bg-cyan-600' },
    ];

    const filteredUsers = usersData.filter((user) => {
        return (
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.id.includes(searchQuery)
        );
    });

    const usersPerPage = 6;
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * usersPerPage,
        currentPage * usersPerPage
    );

    const changePage = (page) => {
        setCurrentPage(page);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Activo': return 'bg-green-900 bg-opacity-20 text-green-400';
            case 'Inactivo': return 'bg-red-900 bg-opacity-20 text-red-400';
            default: return 'bg-gray-900 bg-opacity-20 text-gray-400';
        }
    };

    const getRoleColor = (role) => {
        switch (role) {
            case 'Admin': return 'bg-purple-900 bg-opacity-20 text-purple-400';
            case 'Manager': return 'bg-blue-900 bg-opacity-20 text-blue-400';
            default: return 'bg-gray-900 bg-opacity-20 text-gray-400';
        }
    };

    return (
        <>
            <Layout>
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-white">Gestión de Usuarios</h1>
                    <p className="text-gray-400">Administra todos los usuarios del sistema.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {statsData.map((stat, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-medium text-white">{stat.title}</h2>
                                <div className={`h-10 w-10 rounded-full ${stat.color} flex items-center justify-center`}>
                                    <span className="text-white font-bold">{stat.value}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col mb-6 space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div className="relative w-full md:w-1/3">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <SearchIcon className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Buscar usuario..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                    >
                        <PlusIcon className="w-5 h-5 mr-2" />
                        Nuevo Usuario
                    </button>
                </div>

                <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-xs font-medium text-gray-400 border-b border-gray-700">
                                    <th className="px-6 py-3">Usuario</th>
                                    <th className="px-6 py-3">Email</th>
                                    <th className="px-6 py-3">Rol</th>
                                    <th className="px-6 py-3">Estado</th>
                                    <th className="px-6 py-3">Licencias</th>
                                    <th className="px-6 py-3">Último Acceso</th>
                                    <th className="px-6 py-3">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedUsers.map((user) => (
                                    <tr key={user.id} className="border-b border-gray-700 last:border-0 hover:bg-gray-700">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                                    {user.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <span className="ml-3 text-white">{user.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">{user.email}</td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">{user.licenses}</td>
                                        <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">{user.lastLogin}</td>
                                        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                            <div className="flex space-x-3">
                                                <button className="text-indigo-400 hover:text-indigo-300">Editar</button>
                                                <button className="text-cyan-400 hover:text-cyan-300">Licencias</button>
                                                <button className="text-red-400 hover:text-red-300">Desactivar</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {totalPages > 1 && (
                        <div className="px-6 py-3 flex items-center justify-between border-t border-gray-700">
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-400">
                                        Mostrando <span className="font-medium">{(currentPage - 1) * usersPerPage + 1}</span> a <span className="font-medium">{Math.min(currentPage * usersPerPage, filteredUsers.length)}</span> de <span className="font-medium">{filteredUsers.length}</span> resultados
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        <button
                                            onClick={() => changePage(Math.max(1, currentPage - 1))}
                                            disabled={currentPage === 1}
                                            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-sm font-medium ${currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-300 hover:bg-gray-700'
                                                }`}
                                        >
                                            <span className="sr-only">Anterior</span>
                                            &laquo;
                                        </button>

                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => changePage(i + 1)}
                                                className={`relative inline-flex items-center px-4 py-2 border border-gray-700 text-sm font-medium ${currentPage === i + 1
                                                    ? 'z-10 bg-indigo-600 border-indigo-500 text-white'
                                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                                    }`}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}

                                        <button
                                            onClick={() => changePage(Math.min(totalPages, currentPage + 1))}
                                            disabled={currentPage === totalPages}
                                            className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-700 bg-gray-800 text-sm font-medium ${currentPage === totalPages ? 'text-gray-500 cursor-not-allowed' : 'text-gray-300 hover:bg-gray-700'
                                                }`}
                                        >
                                            <span className="sr-only">Siguiente</span>
                                            &raquo;
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Layout>

            {showModal && (
                <ModalNewCli setShowModal={setShowModal} />
            )}
        </>

    );
};

export default Users;