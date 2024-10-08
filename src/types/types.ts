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

export const initialData = {
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
  ipAddress: string;
  setIpAddress: (ipAddress: string) => void;
  error: string | null;
}

export interface IWidgetProps {
  data: IData;
  loading: boolean;
}

export interface IMapProps {
  data: IData;
}
