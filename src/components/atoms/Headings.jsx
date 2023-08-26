import { Box, Heading,Text } from "@chakra-ui/react";

const Headings = ({headingText, fontSize, headingTextAlign, headingWidth, props}) => {
  return ( 
    <Box>
      <Heading 
        {...props}
        as={"h1"} 
        
        textAlign={headingTextAlign} 
        fontSize={fontSize} 
        lineHeight={{base:"45px", md:"80px"}} 
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