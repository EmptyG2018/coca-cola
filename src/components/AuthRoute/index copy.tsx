import { PageContainer } from "@ant-design/pro-components";
import { Spin } from "antd";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../states/user";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useRequest } from "ahooks";
import { getUserInfo } from "../../services/user";
import store from "store";

type Props = {
  element: JSX.Element;
};

const SpinLoading: React.FC = () => {
  return (
    <PageContainer
      loading={{
        spinning: true,
        tip: "拼命加载中...",
      }}
    >
      <Spin />
    </PageContainer>
  );
};

const AuthRoute: React.FC<Props> = ({ element }) => {
  const { runAsync: runAsyncUserInfo } = useRequest(getUserInfo, {
    manual: true,
  });
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const token = store.get("token");

  const dispathUserInfo = async () => {
    const userInfo = await runAsyncUserInfo();
    setUserInfo(userInfo.data);
  };

  useEffect(() => {
    const permissionAuth = async () => {
      if (token) {
        if (userInfo) {
          setIsAuth(true);
          setLoading(false);
        } else {
          setLoading(true);
          try {
            await dispathUserInfo();
            setIsAuth(true);
          } catch {
            setIsAuth(false);
          } finally {
            setLoading(false);
          }
        }
      } else {
        setLoading(false);
        setIsAuth(false);
      }
    };
    permissionAuth();
  }, []);

  return loading ? <SpinLoading /> : isAuth ? element : <Navigate to="/403" />;
};

export default AuthRoute;
