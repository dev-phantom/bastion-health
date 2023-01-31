import { Box, Heading,Text } from '@chakra-ui/react'
import Headings from '../atoms/Headings';
import Paragraphs from '../atoms/Paragraphs';

const Typography = ({headingText, paraText}) => {
    return ( 
        <Box>
            <Headings headingText={headingText}/>
            <Paragraphs paraText={paraText}/>
        </Box>
     );
}
 
export default Typography;