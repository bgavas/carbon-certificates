import { Col, Pagination, Row } from 'antd';
import { FC, useEffect, useState } from 'react';
import { Certificate } from '../../api/interfaces/certificate.interface';
import AppLayout from '../../components/app-layout';
import CertificateCard from '../../components/certificate-card';
import CertificateTableHeader from '../../components/certificate-table-header';
import favoriteIcon from './../../assets/favorite-filled.png';
import classes from './favorite-certificates.module.scss';

const FavoriteCertificates: FC = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
  });

  useEffect(
    () => {
      getFavorites();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const paginateArray = (array: any[], page: number, perPage: number) => {
    return array.slice((page - 1) * perPage, page * perPage);
  };

  const handlePaginationChange = (page: number, perPage: number) => {
    setPagination({ page, perPage });
  };

  const getFavorites = () => {
    const favoriteCertificates = localStorage.getItem('favoriteCertificates');
    const certs = JSON.parse(favoriteCertificates || '{}');
    setCertificates(Object.values(certs));
  };

  const handleRemove = () => {
    getFavorites();
  };

  return (
    <AppLayout selectedKeys={['favoriteCertificates']}>
      <Row gutter={[16, 16]} justify="center">
        {/* Title */}
        <Col xs={24}>
          <Row justify="center">
            <div className={classes.titleWrapper}>
              <img alt="favorite" src={favoriteIcon} className={classes.titleIcon} />
              <h2 className={classes.title}>Favorite Certificates ({certificates.length})</h2>
            </div>
          </Row>
        </Col>

        {/* Certificates table */}
        <Col className={classes.certificateTableCol}>
          <Row gutter={[8, 8]}>
            {/* Header */}
            <Col xs={24}>
              <CertificateTableHeader />
            </Col>
            {/* Rows */}
            {
              paginateArray(certificates, pagination.page, pagination.perPage).map(certificate =>
                <Col xs={24} key={certificate.id}>
                  <CertificateCard
                    certificate={certificate}
                    onRemove={handleRemove}
                  />
                </Col>,
              )
            }
          </Row>
        </Col>

        {/* Pagination */}
        <Col xs={24}>
          <Row justify="center">
            <Col>
              <Pagination
                pageSize={pagination.perPage}
                current={pagination.page}
                total={certificates.length}
                showSizeChanger
                onChange={handlePaginationChange}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </AppLayout>
  );
};

export default FavoriteCertificates;
