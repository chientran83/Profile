import { useContext } from "react";
import { ThemeContext } from "./ProviderContext";

export const useStore = () => {
  const [state, dispatch] = useContext(ThemeContext);
  return [state, dispatch];
};
