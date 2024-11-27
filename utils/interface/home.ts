export interface IBaseEntity {
  id: string;
  name: string;
}

export interface ISocialMediaAccount {
  id: string;
  handleName: string;
  socialMediaType: string;
}

export interface IBusinessHours extends IBaseEntity {
  isActive: boolean;
  isDefault: boolean;
  sundayStartTime?: string;
  sundayEndTime?: string;
  mondayStartTime?: string;
  mondayEndTime?: string;
  tuesdayStartTime?: string;
  tuesdayEndTime?: string;
  wednesdayStartTime?: string;
  wednesdayEndTime?: string;
  thursdayStartTime?: string;
  thursdayEndTime?: string;
  fridayStartTime?: string;
  fridayEndTime?: string;
  saturdayStartTime?: string;
  saturdayEndTime?: string;
}

export interface IDepartment extends IBaseEntity {
  departmentFunction: string;
  phone: string;
  website?: string;
  email?: string;
  businessHours: IBusinessHours;
}

export interface IDealer extends IBaseEntity {
  integrationKey?: string;
  code?: string;
  makeId?: string;
  makeName?: string;
  phone?: string;
  street?: string;
  city?: string;
  country?: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  isVirtual: boolean;
  isServiceOnly: boolean;
  codeweaversDealerKey?: string;
  departments?: IDepartment[];
  socialMediaAccounts?: ISocialMediaAccount[];
  eCommercePath: string;
}

export interface IDealerBaseResponse {
  messages?: string[];
  success: boolean;
  dealers: IDealer[];
}
