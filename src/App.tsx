import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, THEME } from "./libraries/styled-components";

import AppRoutes from "./routes";
import ProviderContext from "./store/ProviderContext";

function App() {
  return (
    <ChakraProvider>
      <ProviderContext>
        <ThemeProvider theme={THEME}>
          <GlobalStyles />
          <AppRoutes />
        </ThemeProvider>
      </ProviderContext>
    </ChakraProvider>
  );
}

export default App;
