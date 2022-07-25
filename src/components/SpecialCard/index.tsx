import React from "react";
import { Card, Typography, Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

import style from "./index.module.css";

import vueIcon from "../../assets/images/Vue.png";

type Props = {
  title: string;
  desc: string;
  thumb: string;
};

const SpecialCard: React.FC<Props> = ({ title, desc, thumb }) => {
  return (
    <Card className={style["special-card"]}>
      <Avatar size={48} shape="square" src={vueIcon} />
      <Typography.Title level={5} className={style["special-card__title"]}>
        {title}
      </Typography.Title>
      <Typography.Paragraph
        className={style["special-card__desc"]}
        type="secondary"
        ellipsis={{ rows: 2, symbol: "more" }}
      >
        {desc}
      </Typography.Paragraph>
      <Typography.Paragraph
        className={style["special-card__info"]}
        type="secondary"
      >
        1273 浏览量 ｜ 45篇文章
      </Typography.Paragraph>
      <Button type="primary" ghost>
        进入专题
      </Button>
    </Card>
  );
};

export default SpecialCard;
