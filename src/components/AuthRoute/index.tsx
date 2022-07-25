import { PageContainer } from "@ant-design/pro-components";
import { Spin } from "antd";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../states/user";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
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

const RedirectPath = <Navigate to="/403" />;

const AuthRoute: React.FC<Props> = ({ element }) => {
  const [authState, setAuthState] = useState<"loading" | "authed" | "unauth">("loading");
  const { runAsync } = useRequest(getUserInfo, { manual: true });
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const params = useParams();
  const token = store.get("token");

  const dispathUserInfo = async () => {
    setAuthState("loading");
    try {
      const userInfo = await runAsync();
      setUserInfo(userInfo.data);
      setAuthState("authed");
    } catch {
      setAuthState("unauth");
    }
  };

  useEffect(() => {
    if (token) {
      if (userInfo) {
        setAuthState("authed");
      } else {
        dispathUserInfo();
      }
    } else {
      setAuthState("unauth");
    }
  }, [params, userInfo]);

  switch(authState) {
    case "loading":
      return <SpinLoading />;
    case "authed":
      return element;
    case "unauth":
      return RedirectPath;
  }
};

export default AuthRoute;
