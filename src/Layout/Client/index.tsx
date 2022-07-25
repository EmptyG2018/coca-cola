import React, { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Space, Layout, Button, Tooltip, Menu } from "antd";
import {
  HighlightOutlined,
  GithubFilled,
  BookOutlined,
  AppstoreOutlined,
  TagsOutlined,
  NumberOutlined,
} from "@ant-design/icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const items: MenuProps["items"] = [
  {
    label: "文章",
    key: "/article",
    icon: <BookOutlined />,
  },
  {
    label: "专题",
    key: "/speical",
    icon: <NumberOutlined />,
  },
  {
    label: "时光",
    key: "/time",
    icon: <TagsOutlined />,
  },
  {
    label: "案例",
    key: "/project",
    icon: <AppstoreOutlined />,
  },
];

const Demo: React.FC = () => {
  const [menuSelected, setMenuSelected] = useState<string[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuSelected([location.pathname]);
  }, [location.pathname]);

  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        logo={
          <Button
            type="text"
            size="large"
            icon={<HighlightOutlined style={{ fontSize: "22px" }} />}
          >
            小小博客
          </Button>
        }
        menu={
          <Menu
            mode="horizontal"
            items={items}
            selectedKeys={menuSelected}
            onSelect={(selected) => navigate(selected.key)}
          />
        }
        extra={
          <Space>
            <Tooltip placement="bottom" title="github">
              <Button
                type="text"
                icon={<GithubFilled style={{ fontSize: "18px" }} />}
              />
            </Tooltip>
          </Space>
        }
      />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default Demo;
