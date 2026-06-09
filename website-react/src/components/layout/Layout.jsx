import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AnnouncementTicker from './AnnouncementTicker';
import FloatingActions from './FloatingActions';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function Layout() {
  const location = useLocation();

  // Reset scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Trigger reveal animations on route changes
  useScrollReveal(location.pathname);

  return (
    <>
      <div id="page-loader" className="done" style={{ display: 'none' }}></div>
      <div className="page-wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </>
  );
}
