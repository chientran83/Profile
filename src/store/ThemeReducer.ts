import { theme } from "antd";
import { SET_THEME } from "./constants";

export const initState: any = {};

const ThemeReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
  }
};
export default ThemeReducer;
