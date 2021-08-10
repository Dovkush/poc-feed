import React from "react";
import { Layout as LayoutLayer } from "antd";
import Navbar from "../components/Navbar";
const { Header, Footer, Sider, Content } = LayoutLayer;
export default function Layout({ children }) {
  return (
    <LayoutLayer>
      <Navbar />
      <Content>{children}</Content>
    </LayoutLayer>
  );
}
 