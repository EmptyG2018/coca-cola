import React from "react";
import { Card } from "antd";
import { ExportOutlined, GithubFilled } from "@ant-design/icons";

type Props = {
  title: string;
  desc: string;
  thumb: string;
  webUrl: string;
  gitUrl: string;
};

const ProjectCard: React.FC<Props> = ({
  title,
  desc,
  thumb,
  webUrl,
  gitUrl,
}) => {
  return (
    <Card
      cover={<img alt={title} src={thumb} />}
      actions={[<ExportOutlined key="export" />, <GithubFilled key="github" />]}
    >
      <Card.Meta title={title} description={desc} />
    </Card>
  );
};

export default ProjectCard;
