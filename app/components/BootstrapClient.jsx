'use client';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useEffect, useRef } from 'react';

export default function BootstrapClient() {
  const navbarRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      navbarRef.current = document.querySelector('header .navbar');

      const handleScroll = () => {
          if (window.scrollY >= window.innerHeight) {
              setIsScrolled(true);
              navbarRef.current.classList.add('scrolled');
            } else {
              setIsScrolled(false);
              navbarRef.current.classList.remove('scrolled');
          }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();
  
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}



