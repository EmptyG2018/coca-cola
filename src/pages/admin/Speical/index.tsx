import { Card, List, Space, Tag, Image, Typography } from "antd";
import { HistoryOutlined, EyeOutlined } from "@ant-design/icons";
import {
  PageContainer,
  QueryFilter,
  ProForm,
  ProFormText,
  ProFormDatePicker,
} from "@ant-design/pro-components";
import { useRequest } from "ahooks";
import { getArticles } from "../../../services/article";
import React, { useState } from "react";

const Special: React.FC = () => {
  const { data: articleData, loading: articleLoading } =
    useRequest(getArticles);

  const onFilterChange = () => {};
  return (
    <PageContainer>
      <Space size={16} direction="vertical" style={{ display: "flex" }}>
        <Card>
          <QueryFilter defaultCollapsed split>
            <ProFormText name="name" label="专题标题" />
            <ProFormText name="name" label="专题状态" />
            <ProFormDatePicker name="createDate" label="创建时间" />
          </QueryFilter>
        </Card>
        <Card>
          <Space>
            
          </Space>
          <List
            size="large"
            loading={articleLoading}
            rowKey="id"
            itemLayout="vertical"
            dataSource={articleData?.data.records || []}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                actions={[
                  <Space>
                    <Typography.Text type="secondary">
                      <HistoryOutlined />
                      &nbsp;
                      {item.pushTime}
                    </Typography.Text>
                    <Typography.Text type="secondary">
                      <EyeOutlined />
                      &nbsp;
                      {item.count}
                    </Typography.Text>
                  </Space>,
                ]}
                extra={<Image width={180} src={item.thumb} />}
              >
                <List.Item.Meta
                  title={<div>{item.title}</div>}
                  description={
                    <span>
                      {item.tags.map((item) => (
                        <Tag>{item.title}</Tag>
                      ))}
                    </span>
                  }
                />
                <div>{item.desc}</div>
              </List.Item>
            )}
          />
        </Card>
      </Space>
    </PageContainer>
  );
};

export default Special;
