import { HashRouter } from 'react-router-dom'
import AppRoutes from './routes/indexRoutes';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <HashRouter>
      <Toaster position="top-right" />
      <AppRoutes />
    </HashRouter>
  )
}

export default App
