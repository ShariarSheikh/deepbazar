export interface ShippingAddressCreateData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  division: string;
  district: string;
  thana: string;
  address: string;
}

export interface ShippingAddressData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  division: string;
  district: string;
  thana: string;
  address: string;
  user: {
    _id: string;
  };
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}
