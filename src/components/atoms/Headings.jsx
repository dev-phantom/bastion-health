import { Box, Heading,Text } from '@chakra-ui/react'

const Headings = ({headingText, color}) => {
    return ( 
        <Box>
            <Heading as={'h1'} color={color} fontSize={"6xl"} lineHeight={"80px"} w={"80%"} fontFamily={"heldane"} className={"font-primary"}>{headingText}</Heading>
        </Box>
    );
}
 
export default Headings;