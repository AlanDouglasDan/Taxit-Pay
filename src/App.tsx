import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./config/theme";
import { WebRoutes } from "./routes";
import "./App.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <WebRoutes />
    </ChakraProvider>
  );
}

export default App;
