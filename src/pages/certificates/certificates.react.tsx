import { FC } from 'react';
import AppLayout from '../../components/app-layout';

const Certificates: FC = () => {
  return (
    <AppLayout selectedKeys={['certificates']}>
      <div>Certificates</div>
    </AppLayout>
  );
};

export default Certificates;
