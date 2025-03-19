import React, { useState } from 'react';
import Layout from "../../layout/Layout";
import ModalNewCli from '../../core/components/modals/ModalNewCli';
import TableLicenses from './components/table/TableLicenses';
import Pagination from '../../core/components/pagination/Pagination';
import HeaderLicense from './components/header/HeaderLicense';

const Licenses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const licensesData = [
    { id: '8741', user: 'Carlos Méndez', email: 'carlos@ejemplo.com', plan: 'Premium', status: 'Activa', date: '12/02/2025', expiry: '12/02/2026' },
    { id: '8740', user: 'Laura García', email: 'laura@ejemplo.com', plan: 'Basic', status: 'Pendiente', date: '11/02/2025', expiry: '11/02/2026' },
    { id: '8739', user: 'Miguel Torres', email: 'miguel@ejemplo.com', plan: 'Standard', status: 'Activa', date: '10/02/2025', expiry: '10/02/2026' },
    { id: '8738', user: 'Ana Martínez', email: 'ana@ejemplo.com', plan: 'Premium', status: 'Expirada', date: '15/01/2024', expiry: '15/01/2025' },
    { id: '8737', user: 'David Rodríguez', email: 'david@ejemplo.com', plan: 'Standard', status: 'Activa', date: '05/02/2025', expiry: '05/02/2026' },
    { id: '8736', user: 'Sofía López', email: 'sofia@ejemplo.com', plan: 'Basic', status: 'Activa', date: '01/02/2025', expiry: '01/02/2026' },
    { id: '8735', user: 'Fernando Sánchez', email: 'fernando@ejemplo.com', plan: 'Premium', status: 'Activa', date: '29/01/2025', expiry: '29/01/2026' },
    { id: '8734', user: 'Valentina Romero', email: 'valentina@ejemplo.com', plan: 'Standard', status: 'Pendiente', date: '25/01/2025', expiry: '25/01/2026' },
    { id: '8733', user: 'Gabriel Moreno', email: 'gabriel@ejemplo.com', plan: 'Basic', status: 'Expirada', date: '10/01/2024', expiry: '10/01/2025' },
    { id: '8732', user: 'Camila Díaz', email: 'camila@ejemplo.com', plan: 'Premium', status: 'Activa', date: '20/01/2025', expiry: '20/01/2026' },
    { id: '8731', user: 'Javier Herrera', email: 'javier@ejemplo.com', plan: 'Standard', status: 'Activa', date: '15/01/2025', expiry: '15/01/2026' },
    { id: '8730', user: 'Lucía Vargas', email: 'lucia@ejemplo.com', plan: 'Basic', status: 'Activa', date: '10/01/2025', expiry: '10/01/2026' },
  ];

  const filteredLicenses = licensesData.filter((license) => {
    const matchesSearch =
      license.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      license.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      license.id.includes(searchQuery);

    const matchesStatus =
      selectedFilter === 'all' ||
      license.status.toLowerCase() === selectedFilter;

    return matchesSearch && matchesStatus;
  });

  const licensesPerPage = 8;
  const totalPages = Math.ceil(filteredLicenses.length / licensesPerPage);
  const paginatedLicenses = filteredLicenses.slice(
    (currentPage - 1) * licensesPerPage,
    currentPage * licensesPerPage
  );

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Activa': return 'bg-green-900 bg-opacity-20 text-green-400';
      case 'Pendiente': return 'bg-yellow-900 bg-opacity-20 text-yellow-400';
      case 'Expirada': return 'bg-red-900 bg-opacity-20 text-red-400';
      default: return 'bg-gray-900 bg-opacity-20 text-gray-400';
    }
  };

  return (
    <Layout>
      <HeaderLicense
        setSearchQuery={setSearchQuery}
        selectedFilter={selectedFilter}
        setShowModal={setShowModal}
        setSelectedFilter={setSelectedFilter}
        searchQuery={searchQuery} />

      <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <TableLicenses paginatedLicenses={paginatedLicenses} getStatusColor={getStatusColor} />
        <Pagination
          totalPages={totalPages}
          changePage={changePage}
          currentPage={currentPage}
          licensesPerPage={licensesPerPage}
          filteredLicenses={filteredLicenses} />
      </div>

      {showModal && (
        <ModalNewCli setShowModal={setShowModal} />
      )}
    </Layout>
  );
};

export default Licenses;