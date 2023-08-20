import { Flex, VStack } from "@chakra-ui/react";
import InputField from "../molecules/InputField";
import Typography from "../molecules/Typography";

const Newsletter = ({headingText, paraText}) => {
  return (
    <Flex
      py={20}
      color={"white"}
      fontSize={"6xl"}
      className={"bg-primary"}
      justify={"center"}
      align={"center"}
      borderRadius={"20px"}
      my={20}
      px={{ base: 8, md: 0 }}
    >
      <Flex flexDirection={"column"} justify={"center"} align={"center"}>
        <VStack>
          <Typography
            headingText={headingText}
            headingWidth={"100%"}
            headingTextAlign={"center"}
            paraTextAlign={"center"}
            fontSize={"3xl"}
            paraText={paraText}
          />
          <InputField
            placeholder={"enter an email"}
            btnGreentext={"Subscribe"}
            btngreenLink={"#"}
          />
        </VStack>
      </Flex>
    </Flex>
  );
};
 
export default Newsletter;