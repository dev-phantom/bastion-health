import { Box, Heading,Text } from "@chakra-ui/react";
import Headings from "../atoms/Headings";
import Paragraphs from "../atoms/Paragraphs";

const Typography = ({headingText, paraText, paraWidth, fontSize, headingTextAlign, paraTextAlign, headingWidth}) => {
  return ( 
    <Box>
      <Headings headingText={headingText} headingWidth={headingWidth} headingTextAlign={headingTextAlign} fontSize={fontSize}/>
      <Paragraphs paraText={paraText} paraTextAlign={paraTextAlign} paraWidth={paraWidth}/>
    </Box>
  );
};
 
export default Typography;