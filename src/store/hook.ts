import { useContext } from "react";
import { ThemeContext } from "./ProviderContext";

export const useStore = () => {
  const store = useContext(ThemeContext);
  return store;
};
