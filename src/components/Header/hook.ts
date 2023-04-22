import { useEffect, useState } from "react";
import { THEME } from "../../libraries/styled-components";
import { setTheme } from "../../store/actions";
import { useStore } from "../../store/hook";

export type ReceivedProps = Record<string, any>;

const useHeader = (props: ReceivedProps) => {
  const [state, dispatch] = useStore();

  const onChangeTheme = (value: string) => {
    if (value === "dark") {
      dispatch(setTheme(THEME.dark));
    } else if (value === "light") {
      dispatch(setTheme(THEME.light));
    }
  };

  useEffect(() => {
    dispatch(setTheme(THEME.dark));
  }, []);

  return { ...props, onChangeTheme, themeCurrent: state };
};
export type Props = ReturnType<typeof useHeader>;
export default useHeader;
