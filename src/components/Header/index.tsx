import { Flex, Select, Text } from "@chakra-ui/react";
import { FC } from "react";
import useHeader, { Props, ReceivedProps } from "./hook";

const HeaderLayout: FC<Props> = () => {
  return (
    <Flex justify="space-between" p="20px 0" mb="15px">
      <Text>ChienQN</Text>
      <Select placeholder="Themes" w="160px">
        <option value="option1">Red</option>
        <option value="option2">Blue</option>
      </Select>
    </Flex>
  );
};

const Header: FC<ReceivedProps> = (props) => {
  return <HeaderLayout {...useHeader(props)} />;
};
export default Header;
