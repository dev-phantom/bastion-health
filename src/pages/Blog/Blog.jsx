import { Box, Heading } from "@chakra-ui/react";
import ImageSlider from "@/components/organism/ImageSlider";
import Blogs from "@/components/organism/Blogs";
import DefaultLayout from "@/layout/defaultLayout";

const Blog = () => {
  return (
    <DefaultLayout>
      <Box gap={{base:4, md:8}}>
        <Heading
          pt={10}
          px={{base:5, sm:10, md: 40 }}
          textAlign={"center"}
          fontFamily={"heldane"}
          fontSize={{base:"30px", md:"64px"}}
          color={"#141414"}
          fontWeight={"semibold"}
        >
          Hello! 👋🏾 Welcome to Our Wellness & Lifestyle Blog
        </Heading>
        <ImageSlider />
        <Box px={{ base: 5, md: 20 }}>
          <Blogs />
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default Blog;