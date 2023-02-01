import { Box, Heading,Text } from '@chakra-ui/react'

const Paragraphs = ({paraText, paraTextAlign, paraWidth}) => {
    return ( 
        <Box>
            <Text as={"p"} w={paraWidth} textAlign={paraTextAlign} fontSize={"sm"} lineHeight={"30px"} >{paraText}</Text>
        </Box>
     );
}
 
export default Paragraphs;