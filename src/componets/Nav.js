import React from 'react'
import { useNavigate, Link } from "react-router-dom";


import { Menu, Breadcrumb, BreadcrumbProps } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
if (!localStorage.getItem("idPath")) {
    localStorage.setItem("idPath", "1")
}
const Nav = () => {
    const nav = useNavigate();
    return (
        <>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']}>
                <Menu.Item key="/" icon={<UserOutlined />} >
                <Link r to="/">index</Link>
                </Menu.Item>
                <Menu.Item key="/home" icon={<UserOutlined />} >
                <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item key="/about" icon={<UserOutlined />} >
                <Link to="/about">Home</Link>
                </Menu.Item>

            </Menu>
        </>
    )
}

export default Nav