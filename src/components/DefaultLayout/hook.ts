import { useContext } from "react";
import { useStore } from "../../store/hook";

export type ReceivedProps = Record<string, any>;

const useDefaultLayout = (props: ReceivedProps) => {
  const [state, dispatch] = useStore();
  return { ...props, themeCurrent: state };
};

export type Props = ReturnType<typeof useDefaultLayout>;
export default useDefaultLayout;
