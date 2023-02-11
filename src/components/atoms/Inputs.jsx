import { Input } from "@chakra-ui/react";

const Inputs = ({placeholder}) => {
  return ( 
    <Input
      type={"text"}
      placeholder={placeholder}
      _placeholder={{ opacity: 1, color: "gray.500" }}
      pr="4.5rem"
      bg={"white"}
      h={"55px"}
      color={"#141414"}
      borderRadius={"100px"}
    />
  );
};
 
export default Inputs;