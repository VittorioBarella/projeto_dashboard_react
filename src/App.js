import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { DashboardSidebar } from './components/dashboard-sidebar/dashboard-sidebar';
import DashboardNavbar from './components/dashboard-navbar/dashboard-navbar';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <DashboardSidebar />
        <DashboardNavbar />

        <Routes sx={{ mt: 3 }} />
      </div>
    </BrowserRouter>
  );
}

export default App;
