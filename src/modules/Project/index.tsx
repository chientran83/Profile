import { Box, Flex, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { Link as ReactLink } from "react-router-dom";

import { THEME } from "../../libraries/styled-components";
import useProject, { Props, ReceivedProps } from "./hook";

const ProjectLayout: FC<Props> = ({ themeCurrent, projects, project }) => {
  return (
    <Box color={themeCurrent?.colorText?.light} fontSize="18px">
      <Text color={THEME.primary.main} mb="18px" fontSize="20px">
        {project?.name}
      </Text>
      {project?.linkDemo && (
        <Text>
          Live demo​ :
          <Link
            as={ReactLink}
            to={project?.linkDemo}
            _hover={{ color: THEME.primary.main, textDecoration: "underline" }}
          >
            {project?.linkDemo}
          </Link>
        </Text>
      )}

      <Text>
        Source Code :
        <Link
          as={ReactLink}
          to={project?.linkGit}
          _hover={{ color: THEME.primary.main, textDecoration: "underline" }}
        >
          {project?.linkGit}
        </Link>
      </Text>
      <Text>Content :</Text>
      <Text ml="20px">{project?.content}</Text>
      <Text>Technology :</Text>
      {project?.technology.map((technologyItem: any, index: number) => {
        return (
          <Text ml="20px" key={index}>
            - {technologyItem}
          </Text>
        );
      })}

      <Text>Features :</Text>
      {project?.features.map((featureItem: any, index: number) => {
        return (
          <Text ml="20px" key={index}>
            - {featureItem}
          </Text>
        );
      })}
      <Text>Preview :</Text>
      <VStack gap={3}>
        {project?.images.map((image: any, index: any) => {
          return <Image objectFit="cover" src={image} key={index} w="100%"/>;
        })}
      </VStack>
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
          Sản phẩm khác của mình
        </Text>
        <Flex mt="30px" ml="-23px" direction="row" wrap="wrap">
          {projects?.map((projectItem: any, index: number) => {
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
                <Link
                  as={ReactLink}
                  to={`/project/${projectItem.id}`}
                  _hover={{ textDecoration: "none" }}
                >
                  <Image
                    objectFit="cover"
                    src={projectItem.images[0]}
                    borderRadius="8px"
                    h="146px"
                  />
                  <Text fontSize="22px" color={THEME.primary.main} m="3px 0">
                    {projectItem.name}
                  </Text>
                  <Text noOfLines={3} color={themeCurrent?.colorText?.light}>
                    {projectItem.content}
                  </Text>
                </Link>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};
const Project: FC<ReceivedProps> = (props) => {
  return <ProjectLayout {...useProject(props)} />;
};

export default Project;
