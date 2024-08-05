import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider trigger={null} collapsible>
      <div className="logo" style={{ height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.2)' }} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link href="/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link href="/games">Games</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link href="/deals">Deals</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;