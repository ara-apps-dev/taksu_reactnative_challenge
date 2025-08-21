import React, { useEffect } from 'react';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // When the initialization process has completed
  }, []);

  return <>{children}</>;
};
