import { Box, Heading,Text } from "@chakra-ui/react";

const Headings = ({headingText, color,fontSize, headingTextAlign, headingWidth}) => {
  return ( 
    <Box>
      <Heading 
        as={"h1"} 
        color={color} 
        textAlign={headingTextAlign} 
        fontSize={fontSize} 
        lineHeight={"80px"} 
        w={headingWidth} 
        fontFamily={"heldane"} 
        className={"font-primary"}
      >
        {headingText}
      </Heading>
    </Box>
  );
};
 
export default Headings;