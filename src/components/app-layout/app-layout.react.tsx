import { FC } from 'react';
import classes from './app-layout.module.scss';
import { useNavigate } from 'react-router';
import { Layout, Menu } from 'antd';

const { Content, Header } = Layout;

type Props = {
  selectedKeys: string[],
};

const AppLayout: FC<Props> = ({
  children,
  selectedKeys,
}) => {
  const navigate = useNavigate();

  const header = (
    <Header className={classes.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={selectedKeys}
      >
        <Menu.Item
          key="certificates"
          onClick={() => navigate('/certificates')}
        >
          Certificates
        </Menu.Item>
        <Menu.Item
          key="favoriteCertificates"
          onClick={() => navigate('/certificates/favorites')}
        >
          Favorite Certificates
        </Menu.Item>
      </Menu>
    </Header>
  );

  const content = (
    <Content className={classes.content}>
      {children}
    </Content>
  );

  return (
    <Layout className={classes.layout}>
      {header}
      {content}
    </Layout>
  );
};

export default AppLayout;
