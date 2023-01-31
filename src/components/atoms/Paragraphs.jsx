import { Box, Heading,Text } from '@chakra-ui/react'

const Paragraphs = ({paraText}) => {
    return ( 
        <Box>
            <Text as={"p"} w={"75%"} fontSize={"sm"} lineHeight={"30px"}>{paraText}</Text>
        </Box>
     );
}
 
export default Paragraphs;