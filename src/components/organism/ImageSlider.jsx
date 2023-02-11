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
              height={"550px"}
              align={"center"}
              justify={"center"}
              width={"402px"}
                    
            >
              <Flex flexDirection={"column"} justifyContent={"center"} align={"center"} px={20}>
                <Heading 
                  py={10}
                  textAlign={"center"}
                  fontFamily={"heldane"} 
                  fontSize={"24px"}
                  color={"#141414"}
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