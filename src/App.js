import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { DashboardSidebar } from './components/dashboard-sidebar/dashboard-sidebar';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <DashboardSidebar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
