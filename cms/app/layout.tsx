import './globals.css';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { Content } from 'antd/lib/layout/layout';

const Layout = dynamic(() => import('antd/lib/layout'), { ssr: false });
const Sidebar = dynamic(() => import('../components/ui/Sidebar'), { ssr: false });
const Topbar = dynamic(() => import('../components/ui/Topbar'), { ssr: false });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: '100vh' }}>
          <Sidebar />
          <Layout className="site-layout">
            <Topbar />
            <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
