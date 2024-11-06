import { Outlet, useNavigate } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

export default function ClientAntdLayout() {
  const items = [
    {
      key: "",
      label: "Home",
    },
    {
      key: "about",
      label: "About",
    },
    {
      key: "login",
      label: "Login",
    },
    {
      key: "register",
      label: "Register",
    },
  ];

  const nav = useNavigate();
  const handleClick = (item: { key: string }) => {
    console.log(item);
    nav(`/antd/${item.key}`);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          onClick={handleClick}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[""]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
