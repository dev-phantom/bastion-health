import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  HStack
} from "@chakra-ui/react";
import { blogs } from "@/data/Data";
import Images from "../atoms/Images";
const Blogs = () => {

  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px" mt={20}>
      {blogs.map((blog) => {
        return (
          <Box as={"a"} key={blog.id} href={"/Blog/" + blog.id} w={"full"}>
            <VStack
              w={{ base: "270px", md: "350px" }}
              display={"flex"}
              justify={{ base: "center", md: "start" }}
              align={{ base: "center", md: "start" }}
            >
              <Images
                imgAlt={"blogImg"}
                imgLink={blog.blogImg}
                width={350}
                height={350}
                className={"rounded-t-lg"}
              />
              <Text
                letterSpacing={"0.04em"}
                fontSize={"lg"}
                fontFamily={"heldane"}
                lineHeight={"30px"}
                pr={20}
              >
                {blog.blogTitle}
              </Text>
              <HStack fontSize={"14px"} spacing={3} fontWeight={"medium"}>
                <Text>{blog.date}</Text>
                <Text fontWeight={"extrabold"} fontSize={"20px"}>
                  .
                </Text>
                <Text>{blog.readTime}</Text>
              </HStack>
            </VStack>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};
 
export default Blogs;