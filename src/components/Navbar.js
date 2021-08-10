import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

export default function Navbar() {
  return (
    <>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item>Login</Menu.Item>
            <Menu.Item>Signup</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
}
