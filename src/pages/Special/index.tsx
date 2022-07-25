import React, { useRef } from "react";
import { useRequest } from "ahooks";
import { Row, Col } from "antd";

import { getSpecials } from "../../services/special";
import SpecialCard from "../../components/SpecialCard";

import layoutStyle from "../../assets/stylesheet/layout.module.css";
import specialStyle from "./index.module.css";

const Special: React.FC = () => {
  const { data: specialData, loading: specialLoading } =
    useRequest(getSpecials);

  return (
    <div className={layoutStyle["content__outer"]}>
      <div className={layoutStyle["content__main"]}>
        <div className={layoutStyle["content__wrap"]}>
          <Row gutter={[16, 16]}>
            {(specialData?.data.records || []).map((item) => (
              <Col span={6}>
                <SpecialCard
                  key={item.id}
                  title={item.title}
                  desc={item.desc}
                  thumb={item.thumb}
                ></SpecialCard>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Special;
