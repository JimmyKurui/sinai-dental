// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import '@/App.css';

import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import FloatingButton from '@/components/ui/FloatingButton';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Team from '@/pages/Team';
import Faqs from '@/pages/Faqs';
import Contact from '@/pages/Contact';
import Analytics from '@/pages/Analytics';
import NotFound from '@/pages/404';

const App = () => {
  const routes = [
    {path: '/', element: <Home /> },
    {path: '/team', element: <Team /> },
    {path: '/services', element: <Services /> },
    {path: '/faqs', element: <Faqs /> },
    {path: '/contact', element: <Contact /> },
    {path: '/analytics', element: <Analytics /> },
    { path: "*", element: <NotFound /> }
  ];
  
  const location = useLocation();
  const isNotFoundPage = routes.map(el => el.path).includes(location.pathname);

  return (
    <div>
      {isNotFoundPage && <Navbar />}
      <main>
        <Routes>
        {routes.map(({ path, element }, idx) => (
          <Route exact path={path} element={element} key={idx} />
        ))}
        </Routes>
        {isNotFoundPage && <FloatingButton />}
      </main>
      {isNotFoundPage && <Footer />}
    </div>
  )
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper
