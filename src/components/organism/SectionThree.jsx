import { Flex, Spacer, Box, Heading, ButtonGroup, Button, Text, HStack, VStack  } from '@chakra-ui/react'
import Typography from '../molecules/Typography';
import Buttons from '../atoms/Buttons';
const sectionThree = (
{   headingText, 
    paraText, 
    btnGreentext, 
    btngreenLink,
}
) => {
    return ( 
        <Box w={"100%"} 
        className={"bg-secondary"} 
        my={20} 
        borderRadius={"40px"} 
        py={20}
        color={"#141414"}
        > 
        <Flex                    
            align={'center'}     
            justify={"center"}  
            pl={10}    
        >
            <VStack w={"58%"} justify={"start"} align={"start"}>
                <Typography headingText={headingText} paraText={paraText} />
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
}
 
export default sectionThree;