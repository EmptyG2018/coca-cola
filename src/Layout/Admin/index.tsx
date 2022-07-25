import { UserOutlined } from "@ant-design/icons";
import { ProLayout } from "@ant-design/pro-components";
import { Avatar, Dropdown, Menu, Space } from "antd";
import React, { useState } from "react";
import defaultSettings from "./defaultSettings";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../states/user";

const Admin: React.FC = () => {
  const userInfo = useRecoilValue(userInfoState);
  const [pathname, setPathname] = useState("/");
  const userActionList = (
    <Menu
      items={[
        {
          key: "user",
          label: "用户信息",
        },
        {
          key: "logout",
          label: "退出登录",
        },
      ]}
    ></Menu>
  );
  return (
    <div
      id="test-pro-layout"
      style={{
        height: "100vh",
      }}
    >
      <ProLayout
        {...defaultSettings}
        location={{
          pathname,
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || "/welcome");
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Dropdown overlay={userActionList}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar shape="square" size="small" icon={<UserOutlined />} />
                  {userInfo?.email}
                </Space>
              </a>
            </Dropdown>
          </div>
        )}
      >
        <Outlet />
      </ProLayout>
    </div>
  );
};

export default Admin;
