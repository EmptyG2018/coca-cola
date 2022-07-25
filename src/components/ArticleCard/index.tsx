import React from "react";
import { Card, Image, Tag, Typography } from "antd";
import "./index.css";

type Props = {
  loading: boolean;
  thumb: string;
  title: string;
  desc: string;
  pushTime: number;
  count: number;
  tags: API.TagItem[];
};

const ArticleCard: React.FC<Props> = (props) => {
  return (
    <Card bordered={false} loading={props.loading} className="article">
      <Typography.Title
        className="article__title"
        level={4}
        ellipsis={{ rows: 1, symbol: "more" }}
      >
        {props.title}
      </Typography.Title>
      <div className="article__content">
        <div className="article__thumb">
          <Image
            className="article__image"
            width={110}
            height={76}
            src={props.thumb}
          />
        </div>
        <div className="article__cell">
          <Typography.Paragraph
            className="article__desc"
            ellipsis={{ rows: 3, symbol: "more" }}
          >
            {props.desc}
          </Typography.Paragraph>
        </div>
      </div>
      <div className="article__action">
        <Typography.Text className="article__time" type="secondary">
          4 天前
        </Typography.Text>
        <span className="interval">·</span>
        {props.tags.map((item) => (
          <Tag color="#cbcbcb" key={item.id}>
            {item.title}
          </Tag>
        ))}
        <span className="interval">·</span>
        <span className="article__count">1735 踩过</span>
      </div>
    </Card>
  );
};

export default ArticleCard;
