import React from "react";
import { Card } from "antd";
import style from "./index.module.css";

type Props = {
  loading: boolean;
  icon?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
};

const AsideCard: React.FC<Props> = ({
  loading = false,
  icon,
  title,
  children,
}) => {
  return (
    <Card bordered={false} loading={loading} className={style["aside-card"]}>
      {icon || title ? (
        <div className={style["aside-card__header"]}>
          {icon ? (
            <span className={style["aside-card__icon"]}>{icon}</span>
          ) : null}
          {title ? (
            <span className={style["aside-card__title"]}>{title}</span>
          ) : null}
        </div>
      ) : null}
      {children}
    </Card>
  );
};

export default AsideCard;
