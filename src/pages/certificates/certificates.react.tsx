import { FileProtectOutlined } from '@ant-design/icons';
import { Col, Pagination, Row, Spin } from 'antd';
import { FC, useState } from 'react';
import { useGetCertificates } from '../../api/services/certificate.service';
import AppLayout from '../../components/app-layout';
import CertificateCard from '../../components/certificate-card';
import CertificateTableHeader from '../../components/certificate-table-header';
import classes from './certificates.module.scss';

const Certificates: FC = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
  });

  const { data, isFetching } = useGetCertificates({ ...pagination, includeMeta: true });
  const certificates = data?.result.data;
  const certificateMeta = data?.result.meta;

  const handlePaginationChange = (page: number, perPage: number) => {
    setPagination({ page, perPage });
  };

  return (
    <AppLayout selectedKeys={['certificates']}>
      <Spin spinning={isFetching}>
        <Row gutter={[16, 16]} justify="center">
          {/* Title */}
          <Col xs={24}>
            <Row justify="center">
              <div className={classes.titleWrapper}>
                <FileProtectOutlined className={classes.titleIcon} />
                <h2 className={classes.title}>Certificates</h2>
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
                certificates?.map(certificate =>
                  <Col xs={24} key={certificate.id}>
                    <CertificateCard certificate={certificate} />
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
                  total={certificateMeta?.total}
                  onChange={handlePaginationChange}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Spin>
    </AppLayout>
  );
};

export default Certificates;
