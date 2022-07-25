import { ProLayoutProps } from "@ant-design/pro-components";
import {
  LineChartOutlined,
  BookOutlined,
  NumberOutlined,
  AppstoreOutlined,
  TagOutlined,
  HighlightOutlined,
} from "@ant-design/icons";

const defaultProps: ProLayoutProps = {
  title: "小小博客",
  logo: <HighlightOutlined style={{ fontSize: "32px" }} />,
  fixSiderbar: true,
  fixedHeader: true,
  waterMarkProps: {
    content: "小小博客"
  },
  route: {
    path: "/admin",
    routes: [
      {
        path: "statistics",
        name: "统计管理",
        icon: <LineChartOutlined />,
      },
      {
        path: "/article",
        name: "文章管理",
        icon: <BookOutlined />,
      },
      {
        path: "/special",
        name: "专题管理",
        icon: <NumberOutlined />,
      },
      {
        path: "/project",
        name: "案例管理",
        icon: <AppstoreOutlined />,
      },
      {
        path: "/tag",
        name: "标签管理",
        icon: <TagOutlined />,
      },
    ],
  },
  location: {
    pathname: "/admin",
  },
};

export default defaultProps;
