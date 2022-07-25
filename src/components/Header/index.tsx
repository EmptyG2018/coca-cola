import React from "react";
import { Layout, Space } from "antd";
import style from "./index.module.css";

type Props = {
  logo: React.ReactNode;
  menu: React.ReactNode;
  extra: React.ReactNode;
};

const Header: React.FC<Props> = ({ logo, menu, extra }) => {
  return (
    <Layout.Header className={style["header"]}>
      <div className={style["header__wrap"]}>
        <div className={style["header__lft"]}>
          <Space>
            {logo ? <div className={style["logo"]}>{logo}</div> : null}
            {menu ? <div className={style["menu"]}>{menu}</div> : null}
          </Space>
        </div>
        <div className={style["header__extra"]}>{extra}</div>
      </div>
    </Layout.Header>
  );
};

export default Header;
