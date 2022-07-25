declare type ResponseOk = {
  code: number;
  msg: string;
};

declare type PaginRequestFieldData = {
  current: number;
  size: number;
};

type PaginResponseFieldData<T = any> = {
  current: number;
  records: T;
  total: number;
};

type ResponseData<T = any> = ResponseOk & {
  data: T;
};

type PaginResponseData<T = any> = ResponseData<PaginResponseFieldData<T>>;

declare namespace Params {
  // 账号登录
  type Login = {
    username: string;
    password: string;
  };
  // 验证码
  type GetVerifyCode = {
    phone: number;
  };
  // 手机登录
  type LoginToPhone = {
    phone: number;
    code: number;
  };
}

declare namespace API {
  // 标签字段
  type TagItem = {
    id: number;
    title: string;
    createTime: number;
  };

  // 文章字段
  type ArticleItem = {
    id: number;
    title: string;
    desc: string;
    thumb: string;
    count: number;
    articleType: 1 | 2;
    pushTime: number;
    tags: TagItem[];
  };

  // 案例字段
  type ProjectItem = {
    id: number;
    title: string;
    desc: string;
    thumb: string;
    createTime: number;
    webUrl: string;
    gitUrl: string;
  };

  // 专题字段
  type SpecialItem = {
    id: number;
    title: string;
    thumb: string;
    desc: string;
    createTime: string;
  };
  // 时光字段
  type TimeItem = {
    type: number;
    title: string;
    desc: string;
    thumb: string;
    toSpeical: string | undefined;
    createTime: number;
  }
  type GetArticles = PaginResponseData<ArticleItem[]>;
  type GetTags = PaginResponseData<TagItem[]>;
  type GetProjects = PaginResponseData<ProjectItem[]>;
  type GetSpecials = PaginResponseData<SpecialItem[]>;
  type GetTimes = PaginResponseData<TimeItem[]>;
  type Login = ResponseData<{
    token: string;
  }>;
  type LoginToPhone = ResponseData<{
    token: string;
  }>;
  type GetVerifyCode = ResponseData<{
    code: number;
  }>;
  type GetUserInfo = ResponseData<{
    email: string;
    createTime: number;
    updateTime: number;
  }>
  
}
