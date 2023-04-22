import { Flex, Select, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

import { THEME } from "../../libraries/styled-components";
import useHeader, { Props, ReceivedProps } from "./hook";

const HeaderLayout: FC<Props> = ({ themeCurrent, onChangeTheme }) => {
  return (
    <Flex justify="space-between" p="20px 0" mb="15px">
      <Link to="">
        <Text
          color={THEME.primary.main}
          fontSize="20px"
          _hover={{ transform: "scale(1.2)" }}
        >
          ChienQN
        </Text>
      </Link>
      <Select
        w="160px"
        color={THEME.primary.main}
        style={{ borderColor: THEME.primary.main }}
        onChange={(e)=>onChangeTheme(e.target.value)}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </Select>
    </Flex>
  );
};

const Header: FC<ReceivedProps> = (props) => {
  return <HeaderLayout {...useHeader(props)} />;
};
export default Header;
