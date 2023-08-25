import {
  Flex,
  Box,
  SimpleGrid,
  Grid,
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
          <Box as={"a"} key={blog.id} href={"/Blog/" + blog.id}>
            <VStack w={"350px"} justify={"start"} align={"start"}>
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