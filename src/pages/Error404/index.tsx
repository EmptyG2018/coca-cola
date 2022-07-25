import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";

const Error404: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="你该不会是迷路了吧，我带你回去"
      extra={
        <Button type="primary" onClick={handleGoToHome}>
          乖乖回去
        </Button>
      }
    />
  );
};

export default Error404;
