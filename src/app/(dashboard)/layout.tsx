'use client';
import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const DashboardLayout: FC<IProps> = ({ children }) => {
  return children;
};

export default DashboardLayout;
