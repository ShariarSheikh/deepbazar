'use client';

export const Role = {
  USER: 'USER',
  SELLER: 'SELLER',
} as const;

export type RoleType = (typeof Role)[keyof typeof Role];
