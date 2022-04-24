import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import SaidMenu from "./SaidMenu";

const { Header, Content, Footer, Sider } = Layout;

const AppRoute = ({childern}) => {
  const nav = useNavigate();
    return (
        <Layout>
            <Layout>
                <Header>
                   <SaidMenu />
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                       {childern}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

export default AppRoute;