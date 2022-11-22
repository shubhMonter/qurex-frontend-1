import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../common/components/Footer';
import Navbar from '../../common/components/Navbar';
import Sidebar from '../../common/components/Sidebar';
import { motion } from 'framer-motion';
const Layout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
  const [isFixedSidebar, setIsFixedSidebar] = useState(false);
  const toggleSidebar = () => setIsFixedSidebar(!isFixedSidebar);

  useEffect(() => {
    window?.sessionStorage.setItem('mobileToggle', isMobileOpen);
    localStorage.setItem('mobileToggle', isMobileOpen);
    //console.log(window.sessionStorage.getItem('mobileToggle'));
  }, [isMobileOpen]);
  return (
    <div className="flex flex-row bg-background">
      <div>
        <Sidebar
          isMobileOpen={isMobileOpen}
          toggleSidebar={toggleSidebar}
          isFixedSidebar={isFixedSidebar}
        />
      </div>
      <motion.div
        className={`${
          isMobileOpen
            ? 'fixed sm:fixed md:static lg:static xl:static  opacity-20 sm:opacity-20 md:opacity-100 lg:opacity-100 xl:opacity-100 bg-gray-400 sm:bg-gray-400 md:bg-transparent lg:bg-transparent xl:bg-transparent'
            : ''
        }  ${
          isFixedSidebar
            ? 'ml-64 duration-300 ease-in-out '
            : 'duration-300 ease-in-out  md:pl-20'
        }  w-full`}
      >
        <Navbar toggleMobile={toggleMobile} />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Layout;
