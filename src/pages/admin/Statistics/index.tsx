import { Button } from "antd";
import { PageContainer } from "@ant-design/pro-components";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../states/user";
import React from "react";

const Statistics: React.FC = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const handleUserInfoChange = () => {
    setUserInfo(null);
  }

  return (
    <PageContainer>
      <Button onClick={handleUserInfoChange}></Button>
    </PageContainer>
  )
};

export default Statistics;
