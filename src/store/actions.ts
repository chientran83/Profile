import { SET_THEME } from "./constants";

export const setTheme = (payload: any) => {
  return {
    type: SET_THEME,
    payload,
  };
};
