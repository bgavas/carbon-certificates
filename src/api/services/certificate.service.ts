import { useQuery } from 'react-query';
import AxiosHelper from '../axios.helper';
import {
  GetCertificatesParams,
  GetCertificatesResponse,
} from '../interfaces/certificate.interface';

export const useGetCertificates = (params: GetCertificatesParams) => {
  return useQuery(
    ['getCertificates', params],
    () => AxiosHelper.instance.get(
      '/public/carbon_registry/v1/certificates',
      { params },
    ) as Promise<GetCertificatesResponse>,
    { keepPreviousData: true },
  );
};
