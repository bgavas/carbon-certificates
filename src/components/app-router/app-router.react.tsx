import { Route, Routes } from 'react-router-dom';
import Certificates from '../../pages/certificates';
import FavoriteCertificates from '../../pages/favorite-certificates';
import NotFound from '../not-found';

const AppRouter = () => {
  return (
    <Routes>
      {/* Certificates */}
      <Route path="certificates" element={<Certificates />} />
      {/* Favorite certificates */}
      <Route path="certificates/favorites" element={<FavoriteCertificates />} />
      {/* Not found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
