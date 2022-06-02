export interface Holiday {
  country_code: string;
  date: string;
  local_name: string;
  name: string;
  regions?: any[];
  types?: string [];
}

export interface HolidaysResponse {
  holidays: Holiday[];
}
