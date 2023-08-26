import { Flex, Box, Heading, Grid } from "@chakra-ui/react";
import Images from "../atoms/Images";
import {slides} from "@/data/Data";
import Typography from "../molecules/Typography";
const ImageSlider = () => {
  return ( 
    <Box
      w={"full"}
    >
      <Box className={"de"} w={"full"}></Box>
      <Grid 
        templateColumns="repeat(6, 1fr)" 
        gap={6}
        overflowX={"scroll"}
      >
        {slides.map((slide) => {
          return(
            <Flex 
              key={slide.id}
              backgroundImage={slide.bgImg}
              backgroundRepeat={"no-repeat"}
              
              backgroundSize={"cover"}
              height={{base:"400px", md:"550px"}}
              align={"center"}
              justify={"center"}
              width={{base:"200px", md:"402px"}}
                    
            >
              <Flex color={"white"} bgGradient={"linear(to-r, blackAlpha.600, transparent)"} h={"full"} flexDirection={"column"} justifyContent={"center"} align={"center"} px={{base:7, md:14}}>
                <Heading 
                  py={{base:5,md:10}}
                  textAlign={"center"}
                  fontFamily={"heldane"} 
                  fontSize={{base:"27px", md:"30px"}}
                  
                  fontWeight={"normal"}
                >
                  {slide.blogTitle}
                </Heading>
                <Typography paraText={slide.author} />
              </Flex>
            </Flex>
          );
        })}
                
      </Grid>
      <Box className={"des"} w={"full"}></Box>

    </Box>
  );
};
 
export default ImageSlider;