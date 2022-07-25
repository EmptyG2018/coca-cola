import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom"
import React from "react";

const Error403: React.FC = () => {

  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login", { replace: true });
  }

  return (
    <Result
      status="403"
      title="403"
      subTitle="你还没有登录呢，这个页面你是进不去的呢"
      extra={<Button type="primary" onClick={handleGoToLogin}>我要去登录后台管理</Button>}
    />
  );
};
export default Error403;
