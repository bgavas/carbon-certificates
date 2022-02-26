import { FC } from 'react';
import AppLayout from '../../components/app-layout';

const FavoriteCertificates: FC = () => {
  return (
    <AppLayout selectedKeys={['favoriteCertificates']}>
      <div>Favorite Certificates</div>
    </AppLayout>
  );
};

export default FavoriteCertificates;
