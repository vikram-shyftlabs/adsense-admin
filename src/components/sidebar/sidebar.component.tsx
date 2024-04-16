import { useState } from 'react';
import { HomeIcon, CampaignIcon, FileTextIcon, AccountIcon } from "../../assets/component-icons/icons";
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
const { Sider } = Layout;

const SidebarComponent = ({ component: Component }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className='min-h-screen fixed'>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key='1' icon={<HomeIcon props={{width:20, height:20}} />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key='2' icon={<CampaignIcon props={{width:20, height:20}} />}>
            <Link to="/campaigns">Campaign</Link>
          </Menu.Item>
          <Menu.Item key='3' icon={<FileTextIcon props={{width:20, height:20}} />}>
            <Link to="/report">Report</Link>
          </Menu.Item>
          <Menu.Item key='4' icon={<AccountIcon props={{width:20, height:20}} />}>
            <Link to="/account">Account</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Component />
      </Layout>
    </Layout>
  );
};

export default SidebarComponent;
