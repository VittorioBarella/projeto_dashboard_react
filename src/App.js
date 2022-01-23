import './App.css';
import { HashRouter } from 'react-router-dom';

import { DashboardSidebar } from './components/dashboard-sidebar/dashboard-sidebar';
import { Home } from './components/home/home';
import { AccountProfile } from './components/account/account-profile';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <DashboardSidebar />
        <Home />
        <AccountProfile />
      </div>
    </HashRouter>
  );
}

export default App;
