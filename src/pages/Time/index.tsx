import { Timeline, Row, Col, Card, Tag, Typography, Avatar } from "antd";
import { useRequest } from "ahooks";
import { getTimes } from "../../services/statistics";
import React from "react";

import layoutStyle from "../../assets/stylesheet/layout.module.css";
import vueLogo from "../../assets/images/Vue.png";

type ArticleProps = {
  title: string;
  desc: string;
  thumb: string;
};

type TagLabelProps = {
  title: string;
};

type SpecialProps = {
  title: string;
  desc: string;
  thumb: string;
  toSpecial: string | undefined;
};

type ProjectProps = {
  title: string;
  desc: string;
  thumb: string;
};

const Article: React.FC<ArticleProps> = ({ title, desc, thumb }) => {
  return (
    <Card>
      <Typography.Title level={5}>{title}</Typography.Title>
      <Typography.Paragraph>{desc}</Typography.Paragraph>
    </Card>
  );
};

const Special: React.FC<SpecialProps> = ({ title, desc, thumb, toSpecial }) => {
  return (
    <>
      <div style={{ display: "flex", background: "#90ddbb", padding: "8px 16px" }}>
        <Avatar shape="square" src={vueLogo} size={24} />
        <Typography.Text>{toSpecial}</Typography.Text>
      </div>
      <Card>
        <Typography.Title level={5}>{title}</Typography.Title>
        <Typography.Paragraph>{desc}</Typography.Paragraph>
      </Card>
    </>
  );
};

const TagLabel: React.FC<TagLabelProps> = ({ title }) => {
  return <Tag color="blue">标题: {title}</Tag>;
};

const Project: React.FC<ProjectProps> = ({ title, desc, thumb }) => {
  return <div>wgewaggewg</div>;
};

const Time: React.FC = () => {
  const { data: timeData } = useRequest(getTimes);

  return (
    <div className={layoutStyle["content__outer"]}>
      <div className={layoutStyle["content__main"]}>
        <div className={layoutStyle["content__wrap"]}>
          <Row>
            <Col span={16} offset={4}>
              <Timeline>
                {(timeData?.data.records || []).map((item) => (
                  <Timeline.Item>
                    <Typography.Title level={5}>一年前</Typography.Title>
                    {/* 文章 */}
                    {item.type === 1 ? (
                      <Article
                        title={item.title}
                        desc={item.desc}
                        thumb={item.thumb}
                      />
                    ) : null}
                    {/* 专题 */}
                    {item.type === 2 ? (
                      <Special
                        title={item.title}
                        desc={item.desc}
                        thumb={item.thumb}
                        toSpecial={item.toSpeical}
                      />
                    ) : null}
                    {/* 标签 */}
                    {item.type === 3 ? <TagLabel title={item.title} /> : null}
                    {/* 案例 */}
                    {item.type === 4 ? (
                      <Project
                        title={item.title}
                        desc={item.desc}
                        thumb={item.thumb}
                      />
                    ) : null}
                  </Timeline.Item>
                ))}
              </Timeline>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Time;
