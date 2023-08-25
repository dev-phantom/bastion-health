import { Flex, Spacer, Box, Heading, ButtonGroup, Button, Text, HStack, VStack  } from "@chakra-ui/react";
import Typography from "../molecules/Typography";
import Buttons from "../atoms/Buttons";
import Images from "../atoms/Images";

const Main = ({ imgLink,
  imgAlt,  
  headingText, 
  paraText, 
  btnGreentext, 
  btngreenLink, 
  btnAlttext, 
  btnAltLink,
  btnVisibility
}) => {
  return ( 
    <Box>
      <Flex                    
        align={"center"} 
        direction={{base:"column", md:"row"}}          
      >
        <VStack w={{base:"90%", md:"50%"}} justify={"start"} align={"start"}>
          <Typography headingText={headingText} headingWidth={{md:"90%"}} fontSize={{base:"4xl", md:"6xl"}} paraText={paraText} paraWidth={{base:"85%", md:"75%"}} />
          <Flex justify={"start"} align={"start"}>
            <Buttons 
              btnAltLink={btnAltLink} 
              btnAlttext={btnAlttext} 
              btnVisibility={btnVisibility}
              bgColor={"#0E563F"}
              btnColor={"white"}
              btnGreentext={btnGreentext} 
              btngreenLink={btngreenLink} /> 
          </Flex>
        </VStack>
        <Spacer />
        <Flex justify={"center"} align={"center"} >
          <Images 
            imgLink={imgLink}
            imgAlt={imgAlt}
            width={400}
            height={400}
            className={"mt-10 md:mt-0"}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
 
export default Main;