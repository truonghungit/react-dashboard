import { Outlet } from 'react-router-dom';

import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';

export default function PortalLayout() {
  return (
    <div>
      <div>DefaultPortalLayout</div>
      <div>
        <TopBar />
        <SideBar />
      </div>
      <Outlet />
    </div>
  );
}
