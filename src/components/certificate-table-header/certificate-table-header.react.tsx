import { Col, Row } from 'antd';
import { FC } from 'react';
import classes from './certificate-table-header.module.scss';

const CertificateTableHeader: FC = () => {
  const renderCell = (
    r: number | string,
  ) => (
    <div className={classes.textWrapper}>
      <span className={classes.text}>{r}</span>
    </div>
  );

  return (
    <Row className={classes.card} gutter={16} wrap={false}>
      {/* Unique id */}
      <Col className={classes.uniqueIdCol}>
        {renderCell('UNIQUE ID')}
      </Col>
      {/* Originator */}
      <Col className={classes.originatorCol}>
        {renderCell('ORIGINATOR')}
      </Col>
      {/* Originator country */}
      <Col className={classes.originatorCountryCol}>
        {renderCell('ORIGINATOR COUNTRY')}
      </Col>
      {/* Owner */}
      <Col className={classes.ownerCol}>
        {renderCell('OWNER')}
      </Col>
      {/* Owner country */}
      <Col className={classes.ownerCountryCol}>
        {renderCell('OWNER COUNTRY')}
      </Col>
      {/* Status */}
      <Col className={classes.statusCol}>
        {renderCell('STATUS')}
      </Col>
    </Row>
  );
};

export default CertificateTableHeader;
