import Navbar from "@/components/common/Navbar";
import { Flex, Spacer, Box, Heading, ButtonGroup, Button } from "@chakra-ui/react";
import Newsletter from "@/components/organism/Newsletter";
import Footer from "@/components/common/Footer";
import ImageSlider from "@/components/organism/ImageSlider";
import Blogs from "@/components/organism/Blogs";
import DefaultLayout from "@/layout/defaultLayout";

const Blog = () => {
  return(
    <DefaultLayout>
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
          <Blogs />
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default Blog;