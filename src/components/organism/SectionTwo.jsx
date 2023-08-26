import { Flex, Spacer, Box, Heading, ButtonGroup, Button, Text, HStack, VStack  } from "@chakra-ui/react";
import Typography from "../molecules/Typography";
import Buttons from "../atoms/Buttons";
const SectionTwo = (
  {   headingText, 
    paraText, 
    btnGreentext, 
    btngreenLink
  }) => {
  return (
    <Box
      w={"100%"}
      className={"bg-primary"}
      mt={20}
      borderRadius={"40px"}
      py={{base:10, md:20}}
      color={"white"}
    >
      <Flex align={"center"} justify={"center"} pl={{base:5, md:10}}>
        <VStack w={{md:"68%"}} justify={"start"} align={"start"}>
          <Typography
            headingText={headingText}
            paraWidth={"75%"}
            headingWidth={{base:"100%", md:"80%"}}
            fontSize={{ base: "3xl", md: "6xl" }}
            paraText={paraText}
          />
          <Flex justify={"start"} align={"start"}>
            <Buttons
              btnGreentext={btnGreentext}
              btngreenLink={btngreenLink}
              bgColor={"white"}
              btnColor={"#0E563F"}
            />
          </Flex>
        </VStack>
        <Spacer />
      </Flex>
    </Box>
  );
};
 
export default SectionTwo;