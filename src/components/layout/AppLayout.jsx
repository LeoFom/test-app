import { Layout, Menu, Typography } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { routes } from "../../routes/index.jsx";

const { Sider, Header, Content } = Layout;

export function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const mainAppRoutes = routes.find(r => r.children)?.children || [];

  const menuItems = mainAppRoutes
    .filter(route => route.label)
    .map((route) => ({
      key: route.path,
      icon: route.icon,
      label: route.label,
    }));

  return (
    <Layout className="h-screen overflow-hidden">
      <Sider
        width={260}
        theme="light"
        className="border-r border-gray-100 h-full flex flex-col"
      >
        <div className="p-6">
          <Typography.Title level={4} className="m-0! text-blue-600">
            Crypto Dash
          </Typography.Title>
        </div>

        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          className="border-none flex-1 overflow-y-auto"
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>

      <Layout className="h-full flex flex-col">
        <Header className="bg-white! border-b border-gray-100 px-8 flex items-center shrink-0 h-16">
          <Typography.Text strong className="text-lg uppercase tracking-wide text-gray-500">
            {menuItems.find(r => r.path === location.pathname)?.label || "Dashboard"}
          </Typography.Text>
        </Header>

        <Content className="h-full overflow-hidden flex flex-col p-8 overflow-y-auto bg-[#f5f7fb]">
          <div className="flex-1 overflow-auto max-w-7xl mx-auto min-h-full bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}