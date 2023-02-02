import Navbar from '@/components/common/Navbar';
import { Flex, Spacer, Box, Heading, ButtonGroup, Button } from '@chakra-ui/react'
import Newsletter from '@/components/organism/Newsletter';
import Footer from '@/components/common/Footer';
import ImageSlider from '@/components/organism/ImageSlider';

const Blog = () => {
    return(
        <Box>
        <Navbar/>
        <Box gap={8}>
          <Heading 
          pt={10}
          px={{ base: 40 }}
          textAlign={"center"}
          fontFamily={"heldane"} 
          fontSize={"64px"}
          color={"#141414"}
          fontWeight={"semibold"}
          >
            Hello!  👋🏾  Welcome to Our Wellness & Lifestyle Blog
          </Heading>
          <ImageSlider />
          <Box 
            px={{ base: 20 }}
          >
            <Newsletter
              headingText={"Subscribe to Our Newsletter"}
              paraText={"Don't miss out on health updates! Dont worry we will not spam you."} 
            />
            <Footer />
          </Box>
          
        </Box>
       </Box>
    );
}

export default Blog