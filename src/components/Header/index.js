import React from "react";
import "./styles.css";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { Face } from "@material-ui/icons";

const { Header } = Layout;

export default function NavBar() {
  return (
    <>
      <Layout>
        <Header className="header">
          <section className="grid-navbar">
            <p className="logo">Bora</p>
            <Menu
              className="itens"
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">Entrar</Menu.Item>
              <Menu.Item key="2">Cadastrar</Menu.Item>
              <Menu.Item key="3">
                <Face />
              </Menu.Item>
            </Menu>
          </section>
        </Header>
      </Layout>
    </>
  );
}
