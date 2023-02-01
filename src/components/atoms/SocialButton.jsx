import {

  chakra,
  VisuallyHidden,
  useColorModeValue,
} from '@chakra-ui/react';
const SocialButton = (
{
  children,
  label,
  href,
}) => {
    return ( 
    <chakra.button
      
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      color={"#85B839"}
      className={"bg-opacity-10 bg-[#85B839]"}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
     );
}
 
export default SocialButton;