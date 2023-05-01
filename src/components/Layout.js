import { Outlet } from 'react-router-dom';
import Navbar from '../routes/Navbar';
const Layout = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;