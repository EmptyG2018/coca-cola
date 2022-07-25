import React from "react";
import { useRequest } from "ahooks";
import { Row, Col } from "antd";
import ProjectCard from "../../components/ProjectCard";

import style from "../../assets/stylesheet/layout.module.css";

import { getProjects } from "../../services/project";

const Demo: React.FC = () => {
  const { data: projectData, loading: projectLoading } =
    useRequest(getProjects);
  return (
    <div className={style["content__outer"]}>
      <div className={style["content__main"]}>
        <div className={style["content__wrap"]}>
          <Row gutter={[16, 16]}>
            {(projectData?.data.records || []).map((item) => (
              <Col span={6} key={item.id}>
                <ProjectCard 
                  title={item.title}
                  thumb={item.thumb}
                  desc={item.desc}
                  webUrl={item.webUrl}
                  gitUrl={item.gitUrl}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Demo;
