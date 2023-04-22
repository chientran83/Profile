import {
  createContext,
  FC,
  ReactElement,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { THEME } from "../libraries/styled-components";
import { setTheme } from "./actions";
import ThemeReducer, { initState } from "./ThemeReducer";

type ProviderContextType = {
  children: ReactElement;
};

export const ThemeContext = createContext<any>([]);

const ProviderContext: FC<ProviderContextType> = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initState);

  useEffect(() => {
    dispatch(setTheme(THEME.dark));
  }, []);

  return (
    <ThemeContext.Provider value={[state, dispatch]}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ProviderContext;
