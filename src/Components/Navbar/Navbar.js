import React, { useState } from 'react';
import { DesktopOutlined, LoginOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

function getItem(label, key, icon, path = null, children, onClick = null) {
    return {
        key,
        icon,
        children,
        label,
        path,
        onClick,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />, null, null),
    getItem('Option 2', '2', <DesktopOutlined />, null, null),
    getItem('User', 'sub1', <UserOutlined />, null, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, null, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('LogIn', '9', <LoginOutlined />, '/login'), // Set the path to /login
];

const NavBar = () => {
    const location = useLocation(); // Get current location
    const [collapsed, setCollapsed] = useState(false);

    let activeKey = null;

    items.some((item) => {
        if (location.pathname.includes(item.path)) {
            activeKey = item.key;
            return true; // Exit the loop
        }
        return false; // Continue iterating
    });

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={[activeKey]} mode="inline">
                {items.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        {item.path ? (
                            <Link to={item.path}>{item.label}</Link>
                        ) : (
                            <span onClick={item.onClick}>{item.label}</span>
                        )}
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    );
};

export default NavBar;
