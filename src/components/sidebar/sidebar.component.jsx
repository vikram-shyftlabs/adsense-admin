import { useState } from "react";
import {
  HomeIcon,
  CampaignIcon,
  FileTextIcon,
  AccountIcon,
} from "../../assets/component-icons/icons"; /* UNCOMMENT as needed */
// import { Layout, Menu, theme } from "antd";
import { Layout, Menu } from "antd";

import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom for navigation
const { Sider } = Layout;

const SidebarComponent = ({ component: Component }) => {
  const { pathname } = useLocation();
  const [collapsed] = useState(false);

  // const [collapsed, setCollapsed] = useState(false);

  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  return (
    <Layout>
      <Sider
        className="min-h-screen w-[10px]"
        style={{
          position: "fixed",
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
          <Menu.Item
            key="/"
            icon={<HomeIcon props={{ width: 20, height: 20 }} />}
          >
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item
            key="/campaigns"
            icon={<CampaignIcon props={{ width: 20, height: 20 }} />}
          >
            <Link to="/campaigns">Campaign</Link>
          </Menu.Item>
          {/* <Menu.Item
            key="/report"
            icon={<FileTextIcon props={{ width: 20, height: 20 }} />}
          >
            <Link to="/report">Report</Link>
          </Menu.Item> */}
          <Menu.Item
            key="/account"
            icon={<AccountIcon props={{ width: 20, height: 20 }} />}
          >
            <Link to="/account">Account</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="ml-48">
        <Component />
      </Layout>
    </Layout>
  );
};

export default SidebarComponent;
