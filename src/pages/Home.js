import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Layout, Menu,Container } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { Button } from "reactstrap";
import Nav from "../componets/Nav";
const { Header, Sider, Content } = Layout;


const Home = () => {
    const [menu,setMenu] = useState(false);
    const  toggle = () => {
        setMenu(!menu)
      };
    return (
        <div>
            <Layout>
                <Sider trigger={null} collapsible collapsed={menu}>
                    <Nav/>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ paddingLeft:10 }}>
                        {React.createElement(menu ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        Home
                    </Content>
                </Layout>
            </Layout>

        </div>
    )
}

export default Home;