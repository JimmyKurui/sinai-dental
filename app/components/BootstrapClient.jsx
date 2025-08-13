'use client';

import { useEffect } from 'react';

const BootstrapClient = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .catch(err => console.error('Bootstrap JS load failed:', err));
  }, []);

  return null;
};

export default BootstrapClient;