import { atom, selector } from "recoil";
import { getUserInfo } from "../services/user";

type UserInfo = API.GetUserInfo['data'];

const userInfoState = atom<UserInfo | null>({
  key: "userInfo",
  default: null,
});

const userInfo = selector({
  key: "getUserInfo",
  get: async () => {
    const userInfo = await getUserInfo();
    return userInfo;
  },
});

export { userInfoState, userInfo };
