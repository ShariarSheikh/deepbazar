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
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  imgUrl: string;
  role: RoleType | RoleType[];
  verified?: boolean;
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

export interface UpdateAccount {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password?: string;
  imgUrl?: string;
  role: RoleType | RoleType[];
  isCustomAccount?: boolean;
  address?: string;
  zipCode?: number;
  bio?: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface ChangePassword {
  userId: string;
  oldPassword: string;
  newPassword: string;
}

export interface ProductSellerProfile {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  imgUrl?: string;
  address?: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}
