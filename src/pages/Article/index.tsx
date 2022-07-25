import React, { useRef } from "react";
import { useRequest } from "ahooks";
import {
  Space,
  Button,
  Input,
  Row,
  Col,
  Tag,
  Affix,
  Typography,
} from "antd";
import {
  FireFilled,
  TagFilled,
} from "@ant-design/icons";

import { getArticles } from "../../services/article";
import { getTags } from "../../services/tag";

import ArticleCard from "../../components/ArticleCard";
import AsideCard from "../../components/AsideCard";


import style from "../../assets/stylesheet/layout.module.css";

const Article: React.FC = () => {

  const contentOuter = useRef<HTMLDivElement>(null);

  const {data: hotData, loading: hotLoading } = useRequest(getArticles);


  const {data: articleData, loading: articleLoading } = useRequest(getArticles);

  
  const {data: tagData, loading: tagLoading } = useRequest(getTags);

  return (
    <div className={style["content__outer"]} ref={contentOuter}>
    <div className={style["content__main"]}>
      <div className={style["content__wrap"]}>
        <Row gutter={20}>
          <Col span={16}>
            <Space direction="vertical">
              {(articleData?.data.records || []).map((item) => (
                <ArticleCard
                  key={item.id}
                  loading={articleLoading}
                  title={item.title}
                  thumb={item.thumb}
                  desc={item.desc}
                  pushTime={item.pushTime}
                  count={item.count}
                  tags={item.tags}
                ></ArticleCard>
              ))}
            </Space>
          </Col>
          <Col span={8}>
            <Affix target={() => contentOuter.current} offsetTop={20}>
              <Space direction="vertical" style={{ display: "flex" }}>
                <AsideCard loading={false}>
                  <Row gutter={10}>
                    <Col flex="auto">
                      <Input placeholder="请输入关键词" />
                    </Col>
                    <Col flex="none">
                      <Button type="primary">搜索</Button>
                    </Col>
                  </Row>
                </AsideCard>
                <AsideCard
                  loading={hotLoading}
                  icon={<FireFilled style={{ color: "#ff4081" }} />}
                  title="热门文章"
                >
                  {(hotData?.data.records || []).map((item) => (
                    <Typography.Text
                      key={item.id}
                      ellipsis={{ symbol: "more" }}
                      style={{ marginBottom: '10px' }}
                    >
                      {item.desc}
                    </Typography.Text>
                  ))}
                </AsideCard>

                <AsideCard
                  loading={tagLoading}
                  icon={<TagFilled style={{ color: "#ff9800" }} />}
                  title="标签"
                >
                  <Space wrap size={6}>
                    {(tagData?.data.records || []).map((item) => (
                      <Tag color="blue" key={item.id}>{item.title}</Tag>
                    ))}
                  </Space>
                </AsideCard>
              </Space>
            </Affix>
          </Col>
        </Row>
      </div>
    </div>
  </div>
  )
}

export default Article;