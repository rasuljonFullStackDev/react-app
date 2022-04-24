import React from 'react'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const SaidMenu = () => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"

        >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" icon={<UserOutlined />}  >
                    nav 1
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />} >
                    nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />} >
                    nav 3
                </Menu.Item>

            </Menu>
        </Sider>
    )
}

export default SaidMenu