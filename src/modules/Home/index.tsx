import { FacebookOutlined, GithubOutlined } from "@ant-design/icons";
import { Link as ReactLink } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Link,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Steps, theme } from "antd";
import { FC } from "react";

import Avatar from "../../assets/images/avatar.jpg";
import { THEME } from "../../libraries/styled-components";
import useHome, { Props, ReceivedProps } from "./hook";
import { Styles } from "./styled";

const HomeLayout: FC<Props> = ({
  onChangeStep,
  stepCurrent,
  steps,
  stepActive,
  projects,
  themeCurrent,
}) => {
  const { Step } = Steps;
  return (
    <Styles>
      <Box>
        {/* information */}
        <Flex
          justify="space-between"
          direction={{ base: "column", lg: "row" }}
          h="100%"
          mt="25px"
        >
          <VStack spacing="2" align="flex-start" maxW="430px">
            <Text fontSize="30px" color={themeCurrent?.colorText?.light}>
              Chào bạn, mình là
            </Text>
            <div className="typewriter">
              <Text as={"h1"} color={THEME.primary.main} fontSize="38px">
                Trần Văn Chiến
              </Text>
            </div>
            <Text color={themeCurrent?.colorText?.light} fontSize="30px">
              Intern/Fresher Frontend Developer
            </Text>
            <Flex direction="column">
              <Text fontSize="16px" color={themeCurrent?.colorText?.light}>
                Mình là Chiến, sinh viên trường Cao đẳng quốc tế BTECT FPT.
              </Text>
              <Flex direction="column" maxW="292px">
                <Link href="https://www.topcv.vn/xem-cv/UAAACwRcUVNSWlJTB1xSB1FUBwoHD1ECAgFSBgc7dc">
                  <Button
                    colorScheme="gray"
                    mt="20px"
                    bg={themeCurrent?.primary?.light}
                    color={themeCurrent?.colorText?.light}
                    _hover={{
                      backgroundColor: themeCurrent?.primary?.light,
                      textDecoration: "underline",
                    }}
                  >
                    Xem CV của mình tại đây
                  </Button>
                </Link>
                <ButtonGroup gap="4" mt="22px">
                  <Link href="https://www.facebook.com/profile.php?id=100023455216315">
                    <Button
                      colorScheme="blue"
                      variant="outline"
                      leftIcon={<FacebookOutlined />}
                      _hover={{ backgroundColor: THEME.primary.main }}
                    >
                      FACEBOOK
                    </Button>
                  </Link>
                  <Link href="https://github.com/chientran83">
                    <Button
                      colorScheme="blue"
                      variant="outline"
                      leftIcon={<GithubOutlined />}
                      _hover={{ backgroundColor: THEME.primary.main }}
                    >
                      GITHUB
                    </Button>
                  </Link>
                </ButtonGroup>
              </Flex>
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
              divider={
                <StackDivider borderColor={themeCurrent?.colorText?.main} />
              }
              borderBottomRightRadius="10px"
              borderTopRightRadius={{ base: "0", md: "10px" }}
              borderBottomLeftRadius={{ base: "10px", md: "0" }}
              bg={themeCurrent?.primary?.light}
              p="30px"
              color={themeCurrent?.colorText?.light}
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
                <Text fontSize="26px">đã tốt nghiệp</Text>
                <Text>BTEC FPT</Text>
              </Flex>
            </Stack>
          </Flex>
        </Flex>
        {/* steps */}
        <Box mt="25px">
          <Text
            color={THEME.primary.main}
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
              backgroundImage: `linear-gradient(to right,white, ${THEME.primary.main});`,
              borderRadius: "20px",
            }}
          >
            Timeline
          </Text>
          <Flex
            mt="30px"
            align={{ base: "flex-start", md: "center" }}
            direction={{ base: "column", md: "row" }}
          >
            <Box w="400px">
              <Steps
                current={stepCurrent}
                onChange={onChangeStep}
                direction="vertical"
                // items={steps}
                // style={{ color: "red" }}
              >
                {steps.map((step, index) => (
                  <Step
                    key={index}
                    title={
                      <Text color={themeCurrent?.colorText?.light}>
                        {step.title}
                      </Text>
                    }
                    description={
                      <Text color={themeCurrent?.colorText?.light}>
                        {step.description}
                      </Text>
                    }
                  />
                ))}
              </Steps>
            </Box>
            <Box
              w="100%"
              bg={themeCurrent?.primary?.light}
              borderRadius="10px"
              p="20px"
            >
              <Text color={themeCurrent?.colorText?.light} fontSize="18px">
                {stepActive?.content}
              </Text>
            </Box>
          </Flex>
        </Box>
        {/* project */}
        <Box mt="30px">
          <Text
            color={THEME.primary.main}
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
              backgroundImage: `linear-gradient(to right,white, ${THEME.primary.main});`,
              borderRadius: "20px",
            }}
          >
            Sản phẩm của mình
          </Text>
          <Flex mt="30px" ml="-23px" direction="row" wrap="wrap">
            {projects?.map((project: any, index: number) => {
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
                  bg={themeCurrent?.primary?.light}
                  p="10px"
                  borderRadius="8px"
                >
                  <Link as={ReactLink} to={`/project/${project.id}`}>
                    <Image
                      objectFit="cover"
                      src={project.images[0]}
                      borderRadius="8px"
                      h="146px"
                    />
                    <Text fontSize="22px" color={THEME.primary.main} m="3px 0">
                      {project.name}
                    </Text>
                    <Text noOfLines={3} color={themeCurrent?.colorText?.light}>
                      {project.content}
                    </Text>
                  </Link>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Box>
    </Styles>
  );
};
const Home: FC<ReceivedProps> = (props) => {
  return <HomeLayout {...useHome(props)} />;
};

export default Home;
