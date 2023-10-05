import { RoleType } from '@/app/auth/utils';

export interface LoginAccount {
  email: string;
  password: string;
}
export interface LoginAccountReturnType {
  data: {
    refreshToken: string;
    accessToken: string;
  };
}

export interface Account {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  imgUrl: string;
  role: RoleType;
  isCustomAccount: boolean;
  address: string;
  zipCode: number;
  bio: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
  };
}
