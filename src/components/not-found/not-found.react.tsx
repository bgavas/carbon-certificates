import { FC } from 'react';
import { Navigate } from 'react-router';

const NotFound: FC = () => {
  return (
    <Navigate replace to="/certificates" />
  );
};

export default NotFound;
