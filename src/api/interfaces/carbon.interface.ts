export interface CarbonUser {
  id: number;
  user: {
    id: number;
  };
  company: {
    id: number;
    name: string;
    address: {
      id: number;
      country: string;
    };
  };
}
