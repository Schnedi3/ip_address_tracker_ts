export interface IData {
  ip: string;
  city: string;
  region_code: string;
  postal: string;
  utc_offset: string;
  org: string;
  latitude: number;
  longitude: number;
}

export const initialIp = {
  ip: "",
  city: "",
  region_code: "",
  postal: "",
  utc_offset: "",
  org: "",
  latitude: 0,
  longitude: 0,
};

export interface IHeaderProps {
  setIpAddress: (ipAddress: string) => void;
}

export interface IWidgetProps {
  data: IData;
  isLoading: boolean;
}

export interface IMapProps {
  data: IData;
}
