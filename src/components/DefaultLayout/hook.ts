import { useContext } from "react";
import { useStore } from "../../store/hook";

export type ReceivedProps = Record<string, any>;

const useDefaultLayout = (props: ReceivedProps) => {
  const { themes } = useStore();
  return { ...props, themeCurrent: themes.state };
};

export type Props = ReturnType<typeof useDefaultLayout>;
export default useDefaultLayout;
