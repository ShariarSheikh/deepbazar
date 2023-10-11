import React from 'react';
import dynamic from 'next/dynamic';

const Alert = dynamic(() => import('./Alert'));

export default function CustomAlertProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Alert />
      {children}
    </>
  );
}
