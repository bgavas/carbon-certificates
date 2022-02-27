import { Col, message, Row, Tooltip } from 'antd';
import { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Certificate } from '../../api/interfaces/certificate.interface';
import classes from './certificate-card.module.scss';
import saveIcon from './../../assets/save.png';
import saveFilledIcon from './../../assets/save-filled.png';

type Props = {
  certificate: Certificate,
};

interface RenderCellStyles {
  width?: string;
  maxWidth?: string;
}

const CertificateCard: FC<Props> = ({
  certificate,
}) => {
  const handleCertificateIdCopy = () => {
    message.info({
      content: 'Certificate ID copied to the clipboard',
      style: {
        top: 2000,
      },
    });
  };

  const handleSave = () => {
    
  };

  const renderCell = (
    r: number | string,
  ) => (
    <div className={classes.textWrapper}>
      <span className={classes.text}>{r}</span>
    </div>
  );

  const renderUniqueIdCell = (
    r: number | string,
  ) => (
    <CopyToClipboard
      text={certificate.uniqueNumber}
      onCopy={handleCertificateIdCopy}
    >
      <Tooltip title="Click to copy the certificate ID" placement="bottom">
        <div className={`${classes.textWrapper} ${classes.uniqueIdTextWrapper}`}>
          <span className={classes.text}>{r}</span>
        </div>
      </Tooltip>
    </CopyToClipboard>
  );

  return (
    <Row className={classes.card} gutter={8}>
      {/* Unique id */}
      <Col className={classes.uniqueIdCol}>
        {renderUniqueIdCell(certificate.uniqueNumber)}
      </Col>
      {/* Originator */}
      <Col className={classes.originatorCol}>
        {renderCell(certificate.companyName)}
      </Col>
      {/* Originator country */}
      <Col className={classes.originatorCountryCol}>
        {renderCell(certificate.countryCode)}
      </Col>
      {/* Owner */}
      <Col className={classes.ownerCol}>
        {renderCell(certificate.carbonCertificateOwnerAccount.carbonUser.company.name)}
      </Col>
      {/* Owner country */}
      <Col className={classes.ownerCountryCol}>
        {renderCell(certificate.carbonCertificateOwnerAccount.carbonUser.company.address.country)}
      </Col>
      {/* Status */}
      <Col className={classes.statusCol}>
        {renderCell(certificate.status)}
      </Col>
      {/* Save icon */}
      <Col className={classes.saveCol}>
        <img
          alt="save"
          src={saveIcon}
          className={classes.saveIcon}
          onClick={handleSave}
        />
      </Col>
    </Row>
  );
};

export default CertificateCard;
