import { Box, Container } from "@chakra-ui/react";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import useDefaultLayout, { Props, ReceivedProps } from "./hook";

const DefaultLayoutLayout: FC<Props> = () => {
  return (
    <Box bg="linear-gradient(#600360, #efd4ef)">
      <Container maxW="1200px">
        <Header />
        <Outlet />
      </Container>
    </Box>
  );
};
const DefaultLayout: FC<ReceivedProps> = (props) => {
  return <DefaultLayoutLayout {...useDefaultLayout(props)} />;
};
export default DefaultLayout;
