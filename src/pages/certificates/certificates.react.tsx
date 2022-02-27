import { Col, Row, Table, TablePaginationConfig } from 'antd';
import { FC, useState } from 'react';
import classes from './certificates.module.scss';
import { useGetCertificates } from '../../api/services/certificate.service';
import AppLayout from '../../components/app-layout';
import CertificateCard from '../../components/certificate-card';

const Certificates: FC = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
  });

  const { data, isFetching } = useGetCertificates({ ...pagination, includeMeta: true });
  const certificates = data?.result.data;
  const certificateMeta = data?.result.meta;
  console.log('certificates', certificates);

  const handleTableChange = ({ current, pageSize }: TablePaginationConfig) => {
    setPagination({
      page: current || pagination.page,
      perPage: pageSize || pagination.perPage,
    });
  };

  return (
    <AppLayout selectedKeys={['certificates']}>
      <Row gutter={[8, 8]}>
        {
          certificates?.map(certificate =>
            <Col xs={24} key={certificate.id}>
              <CertificateCard certificate={certificate} />
            </Col>,
          )
        }
      </Row>
      {/* <Table
        loading={isFetching}
        rowKey={r => r.id}
        rowClassName={classes.tableRow}
        size="small"
        dataSource={certificates}
        onChange={handleTableChange}
        scroll={{
          x: true,
        }}
        pagination={{
          ...pagination,
          total: certificateMeta?.total,
        }}
        columns={[{
          title: 'UNIQUE ID',
          dataIndex: 'uniqueNumber',
          render: r => renderCell(r, { width: '250px' }),
        }, {
          title: 'ORIGINATOR',
          dataIndex: 'companyName',
          render: r => renderCell(r, { maxWidth: '180px' }),
        }, {
          title: 'ORIGINATOR COUNTRY',
          dataIndex: 'countryCode',
          render: r => renderCell(r),
        }, {
          title: 'OWNER',
          dataIndex: ['carbonCertificateOwnerAccount', 'carbonUser', 'company', 'name'],
          render: r => renderCell(r, { maxWidth: '180px' }),
        }, {
          title: 'OWNER COUNTRY',
          dataIndex: [
            'carbonCertificateOwnerAccount', 'carbonUser', 'company', 'address', 'country',
          ],
          render: r => renderCell(r),
        }, {
          title: 'STATUS',
          dataIndex: ['status'],
          render: r => renderCell(r),
        }, {
          title: 'ORIGINATOR COUNTRY',
          dataIndex: 'countryCode',
          render: r => renderCell(r),
        }]}
      /> */}
    </AppLayout>
  );
};

export default Certificates;
