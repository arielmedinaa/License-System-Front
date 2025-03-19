import { useState } from 'react';
import Layout from '../../layout/Layout';
import ModalNewCli from '../../core/components/modals/ModalNewCli';
import { monthlyData, planDistribution, statusDistribution } from '../../core/constants/DataPlansDistribution';
import CardsLicensesHome from './components/cards/CardsLicensesHome';
import TableUsuariosRecientes from './components/table/TableUsuariosRecientes';
import LicensesState from './components/cards/LicensesState';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const licenseData = {
    value: '234',
    percentage: '+12%',
    period: 'Since last week'
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
          <CardsLicensesHome licenseData={licenseData} monthlyData={monthlyData} planDistribution={planDistribution}/>

          <TableUsuariosRecientes handleCreateLicense={handleCreateLicense} recentUsers={recentUsers} getStatusColor={getStatusColor}/>

          <LicensesState statusDistribution={statusDistribution}/>
        </div>
      </Layout>
      {showModal && (
        <ModalNewCli setShowModal={setShowModal} />
      )}
    </>

  );
};

export default Dashboard;