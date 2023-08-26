import { Button, HStack  } from "@chakra-ui/react";

const Buttons = ({btnAltLink, 
  btnAlttext, 
  btnGreentext, 
  btngreenLink, 
  bgColor, 
  btnColor, 
  btnVisibility 
}) => {
  return ( 
    <HStack gap={{base:3, md:10}} pt={1}>
      <Button 
        as={"a"} 
        borderRadius={"100px"} 
        visibility={btnVisibility} 
        href={btngreenLink} 
        bg={bgColor} 
        color={btnColor} 
        variant="solid" 
        py={{base:4, md:6}} 
        px={{base:5, md:10}}
        _hover={{
          textDecoration: "none",
          bg: bgColor
          
        }}>

        {btnGreentext}
  
      </Button>
      <Button as={"a"} href={btnAltLink} colorScheme="teal" variant="link">
        {btnAlttext}
      </Button>
    </HStack>
  );
};
 
export default Buttons;