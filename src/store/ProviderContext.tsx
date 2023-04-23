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
import ProjectReducer, { initStateProject } from "./ProjectReducer";
import ThemeReducer, { initState } from "./ThemeReducer";

type ProviderContextType = {
  children: ReactElement;
};

export const ThemeContext = createContext<any>([]);

const ProviderContext: FC<ProviderContextType> = ({ children }) => {
  const [themesState, themesDispatch] = useReducer(ThemeReducer, initState);
  const [projectState, projectDispatch] = useReducer(
    ProjectReducer,
    initStateProject
  );

  useEffect(() => {
    themesDispatch(setTheme(THEME.dark));
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        themes: { state: themesState, dispatch: themesDispatch },
        project: { state: projectState, dispatch: projectDispatch },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ProviderContext;
