'use client';

import { BiSolidErrorCircle } from 'react-icons/bi';

export const Role = {
  USER: 'USER',
  SELLER: 'SELLER',
} as const;

export type RoleType = (typeof Role)[keyof typeof Role];

export const InputApiErrorMessage = (message: string) => (
  <div className="w-full h-[35px] rounded-[6px] bg-[#ff555536] space-x-2 pl-[4px] mb-[17px] flex items-center text-[13px] text-red-600">
    <BiSolidErrorCircle size={20} /> <span>{message}</span>
  </div>
);
