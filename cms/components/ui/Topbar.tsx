import { Layout, Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="1">
      <a href="/profile">Profile</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="/logout">Logout</a>
    </Menu.Item>
  </Menu>
);

const Topbar = () => {
  return (
    <Header className="site-layout-background" style={{ padding: 0, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <Dropdown overlay={menu} trigger={['click']}>
        <Avatar size="large" icon={<UserOutlined />} style={{ marginRight: '16px' }} />
      </Dropdown>
    </Header>
  );
};

export default Topbar;