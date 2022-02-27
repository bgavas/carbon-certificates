import { Col, message, Row, Tooltip } from 'antd';
import { FC, useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Certificate } from '../../api/interfaces/certificate.interface';
import classes from './certificate-card.module.scss';
import favoriteIcon from './../../assets/favorite.png';
import favoriteFilledIcon from './../../assets/favorite-filled.png';

type Props = {
  certificate: Certificate,
};

const CertificateCard: FC<Props> = ({
  certificate,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(
    () => {
      const favoriteCertificates = localStorage.getItem('favoriteCertificates');
      const cert = JSON.parse(favoriteCertificates || '{}')[certificate.uniqueNumber];
      setIsFavorite(!!cert);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleCertificateIdCopy = () => {
    message.info({
      content: 'Certificate ID copied to the clipboard',
      style: {
        top: 2000,
      },
    });
  };

  const handleAddToFavorites = () => {
    const id = certificate.uniqueNumber;
    // Get and parse certificates
    const tmpCerts: any = localStorage.getItem('favoriteCertificates') || '{}';
    const parsedCerts = JSON.parse(tmpCerts);

    // Add certificate to favorites
    parsedCerts[id] = certificate;
    localStorage.setItem('favoriteCertificates', JSON.stringify(parsedCerts));
    setIsFavorite(true);
  };

  const handleRemoveFromFavorites = () => {
    const id = certificate.uniqueNumber;
    // Get and parse certificates
    const tmpCerts: any = localStorage.getItem('favoriteCertificates') || '{}';
    const parsedCerts = JSON.parse(tmpCerts);

    // Remove certificate from favorites
    delete parsedCerts[id];
    localStorage.setItem('favoriteCertificates', JSON.stringify(parsedCerts));
    setIsFavorite(false);
  };

  const renderCell = (
    r: number | string,
  ) => (
    <div className={classes.textWrapper}>
      <span className={classes.text}>{r}</span>
    </div>
  );

  const renderUniqueIdCell = () => (
    <CopyToClipboard
      text={certificate.uniqueNumber}
      onCopy={handleCertificateIdCopy}
    >
      <Tooltip title="Click to copy the certificate ID" placement="bottom">
        <div className={`${classes.textWrapper} ${classes.uniqueIdTextWrapper}`}>
          <span className={classes.text}>{certificate.uniqueNumber}</span>
        </div>
      </Tooltip>
    </CopyToClipboard>
  );

  const renderFavoriteIcon = () => {
    return (
      isFavorite ?
      <img
        alt="favorite"
        src={favoriteFilledIcon}
        className={classes.favoriteIcon}
        onClick={handleRemoveFromFavorites}
      /> :
      <img
        alt="not-favorite"
        src={favoriteIcon}
        className={classes.favoriteIcon}
        onClick={handleAddToFavorites}
      />
    );
  };

  return (
    <Row className={classes.card} gutter={16} wrap={false}>
      {/* Unique id */}
      <Col className={classes.uniqueIdCol}>
        {renderUniqueIdCell()}
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
      {/* Favorite icon */}
      <Col className={classes.favoriteCol}>
        {renderFavoriteIcon()}
      </Col>
    </Row>
  );
};

export default CertificateCard;
