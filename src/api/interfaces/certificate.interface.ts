import { CarbonUser } from './carbon.interface';

export interface Certificate {
  id: number;
  uniqueNumber: string;
  status: string;
  ownershipStatus: string;
  vintageYear: number[];
  methodologyVersion: string[];
  countryCode: string;
  companyName: string;
  tonnes: number;
  issuanceDate: string;
  deployment: string;
  validity: string;
  replenishment: any;
  carbonField: {
    id: number;
    address: {
      id: number;
      country: string;
    };
  };
  carbonUser: CarbonUser;
  carbonCertificateOwnerAccount: {
    id: number;
    carbonUser: CarbonUser;
  };
}

export interface GetCertificatesParams {
  page: number;
  perPage: number;
  includeMeta: boolean;
}

export interface GetCertificatesResponse {
  error: any[];
  success: boolean;
  result: {
    data: Certificate[];
    meta: {
      currentPage: number;
      size: number;
      total: number;
      totalPages: number;
    };
  };
}
