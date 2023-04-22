import { FacebookOutlined, GithubOutlined } from "@ant-design/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Steps } from "antd";
import { FC } from "react";

import Avatar from "../../assets/images/avatar.jpg";
import useHome, { Props, ReceivedProps } from "./hook";

const HomeLayout: FC<Props> = ({
  onChangeStep,
  stepCurrent,
  steps,
  stepActive,
  projects,
}) => {
  return (
    <Box>
      {/* information */}
      <Flex
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
        h="100%"
      >
        <VStack spacing="2" align="flex-start" maxW="430px">
          <Text fontSize="30px" color="white">
            Chào bạn, mình là
          </Text>
          <Text color="purple" fontSize="43px">
            ChienQN
          </Text>
          <Text color="white" fontSize="30px">
            Intern/Fresher Frontend Developer
          </Text>
          <Flex direction="column">
            <Text fontSize="16px" color="white">
              Mình là Chiến, sinh viên trường Cao đẳng quốc tế BTECT FPT.
            </Text>
            <Button colorScheme="gray" mt="15px">
              Xem CV của mình tại đây
            </Button>
            <ButtonGroup gap="4" mt="15px">
              <Button
                colorScheme="purple"
                variant="outline"
                leftIcon={<FacebookOutlined />}
              >
                FACEBOOK
              </Button>
              <Button
                colorScheme="purple"
                variant="outline"
                leftIcon={<GithubOutlined />}
              >
                GITHUB
              </Button>
            </ButtonGroup>
          </Flex>
        </VStack>
        <Flex
          align="stretch"
          fontSize="16px"
          direction={{ base: "column", md: "row" }}
          mt={{ base: "30px", lg: "0" }}
        >
          <Image
            h="466px"
            objectFit="cover"
            w={{ base: "100%", md: "471px" }}
            src={Avatar}
            borderTopLeftRadius="10px"
            borderTopRightRadius={{ base: "10px", md: "0" }}
            borderBottomLeftRadius={{ base: "0", md: "10px" }}
          />
          <Stack
            direction="column"
            spacing="auto"
            divider={<StackDivider borderColor="gray.200" />}
            borderBottomRightRadius="10px"
            borderTopRightRadius={{ base: "0", md: "10px" }}
            borderBottomLeftRadius={{ base: "10px", md: "0" }}
            bg="white"
            p="30px"
          >
            <Flex justify="space-between" direction="column">
              <Text>Ngày sinh</Text>
              <Text fontSize="26px">08</Text>
              <Text>03/2001</Text>
            </Flex>
            <Flex justify="space" direction="column">
              <Text>Địa chỉ</Text>
              <Text fontSize="26px">Phương Nam</Text>
              <Text>Uông Bí,Quảng Ninh</Text>
            </Flex>
            <Flex justify="space" direction="column">
              <Text>Năm học</Text>
              <Text fontSize="26px">Done</Text>
              <Text>BTEC FPT</Text>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
      {/* steps */}
      <Box mt={{ base: "30px", lg: "0" }}>
        <Text
          color="white"
          fontSize="22px"
          position="relative"
          display="inline-block"
          _before={{
            content: '""',
            width: "60%",
            height: "5px",
            position: "absolute",
            left: "0",
            bottom: "-4px",
            backgroundImage: "linear-gradient(to right,white, #bf00bf);",
            borderRadius: "20px",
          }}
        >
          Timeline
        </Text>
        <Flex mt="30px" align="center">
          <Box w="400px">
            <Steps
              current={stepCurrent}
              onChange={onChangeStep}
              direction="vertical"
              items={steps}
            />
          </Box>
          <Box w="100%" bg="#ab50ab" borderRadius="10px" p="20px">
            <Text color="white" fontSize="18px">
              {stepActive?.content}
            </Text>
          </Box>
        </Flex>
      </Box>
      {/* project */}
      <Box mt={{ base: "30px", lg: "0" }}>
        <Text
          color="white"
          fontSize="22px"
          position="relative"
          display="inline-block"
          _before={{
            content: '""',
            width: "60%",
            height: "5px",
            position: "absolute",
            left: "0",
            bottom: "-4px",
            backgroundImage: "linear-gradient(to right,white, #bf00bf);",
            borderRadius: "20px",
          }}
        >
          Sản phẩm của mình
        </Text>
        <Flex mt="30px" ml="-23px" direction="row" wrap="wrap">
          {projects.map((project, index) => {
            return (
              <Box
                width={{
                  base: "calc(100% / 1 - 23px)",
                  sm: "calc(100% / 2 - 23px)",
                  md: "calc(100% / 3 - 23px)",
                  lg: "calc(100% / 4 - 23px)",
                }}
                ml="23px"
                key={index}
                mb="30px"
              >
                <Image
                  objectFit="cover"
                  src={project.image}
                  borderRadius="8px"
                />
                <Text fontSize="22px" color="#bf00bf" m="3px 0">
                  {project.name}
                </Text>
                <Text noOfLines={3}>{project.content}</Text>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};
const Home: FC<ReceivedProps> = (props) => {
  return <HomeLayout {...useHome(props)} />;
};

export default Home;
